from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
import json
import os
import uuid
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'kenyahouses_secret_key_2026')

ADMIN_USER = os.environ.get('ADMIN_USER', 'johny')
ADMIN_PASS = os.environ.get('ADMIN_PASS', 'qwerty12345')

DATA_FILE = 'data/properties.json'
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}

os.makedirs('data', exist_ok=True)
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def load_properties():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    return []

def save_properties(properties):
    with open(DATA_FILE, 'w') as f:
        json.dump(properties, f, indent=2)

def login_required(f):
    from functools import wraps
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in' not in session:
            flash('Please login first', 'error')
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def index():
    properties = load_properties()
    return render_template('index.html', properties=properties)

@app.route('/property/<int:prop_id>')
def property_detail(prop_id):
    properties = load_properties()
    property = next((p for p in properties if p['id'] == prop_id), None)
    if property:
        return render_template('property.html', property=property)
    return redirect(url_for('index'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == ADMIN_USER and password == ADMIN_PASS:
            session['logged_in'] = True
            flash('Welcome back, johny!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid credentials', 'error')
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    flash('Logged out successfully', 'success')
    return redirect(url_for('index'))

@app.route('/admin')
@login_required
def dashboard():
    properties = load_properties()
    return render_template('dashboard.html', properties=properties)

@app.route('/admin/add', methods=['GET', 'POST'])
@login_required
def add_property():
    if request.method == 'POST':
        properties = load_properties()
        new_id = max([p['id'] for p in properties], default=0) + 1
        
        images = []
        if 'images' in request.files:
            files = request.files.getlist('images')
            for file in files:
                if file and allowed_file(file.filename):
                    filename = f"{uuid.uuid4().hex}_{secure_filename(file.filename)}"
                    file.save(os.path.join(UPLOAD_FOLDER, filename))
                    images.append(f"static/uploads/{filename}")
        
        if not images:
            images = ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"]
        
        property = {
            'id': new_id,
            'title': request.form['title'],
            'location': request.form['location'],
            'locationKey': request.form['locationKey'],
            'type': request.form['type'],
            'purpose': request.form['purpose'],
            'price': int(request.form['price']),
            'bedrooms': int(request.form['bedrooms']),
            'bathrooms': int(request.form['bathrooms']),
            'area': int(request.form['area']),
            'description': request.form['description'],
            'image': images[0],
            'images': images,
            'lat': float(request.form.get('lat', -1.2921)),
            'lng': float(request.form.get('lng', 36.8219)),
            'contact_name': request.form.get('contact_name', ''),
            'contact_email': request.form.get('contact_email', ''),
            'contact_phone': request.form.get('contact_phone', '')
        }
        
        properties.append(property)
        save_properties(properties)
        flash('Property added successfully!', 'success')
        return redirect(url_for('dashboard'))
    
    return render_template('add_property.html')

@app.route('/admin/edit/<int:prop_id>', methods=['GET', 'POST'])
@login_required
def edit_property(prop_id):
    properties = load_properties()
    property = next((p for p in properties if p['id'] == prop_id), None)
    
    if not property:
        flash('Property not found', 'error')
        return redirect(url_for('dashboard'))
    
    if request.method == 'POST':
        property['title'] = request.form['title']
        property['location'] = request.form['location']
        property['locationKey'] = request.form['locationKey']
        property['type'] = request.form['type']
        property['purpose'] = request.form['purpose']
        property['price'] = int(request.form['price'])
        property['bedrooms'] = int(request.form['bedrooms'])
        property['bathrooms'] = int(request.form['bathrooms'])
        property['area'] = int(request.form['area'])
        property['description'] = request.form['description']
        property['lat'] = float(request.form.get('lat', -1.2921))
        property['lng'] = float(request.form.get('lng', 36.8219))
        property['contact_name'] = request.form.get('contact_name', '')
        property['contact_email'] = request.form.get('contact_email', '')
        property['contact_phone'] = request.form.get('contact_phone', '')
        
        if 'images' in request.files:
            files = request.files.getlist('images')
            new_images = []
            for file in files:
                if file and file.filename and allowed_file(file.filename):
                    filename = f"{uuid.uuid4().hex}_{secure_filename(file.filename)}"
                    file.save(os.path.join(UPLOAD_FOLDER, filename))
                    new_images.append(f"static/uploads/{filename}")
            if new_images:
                property['images'] = new_images
                property['image'] = new_images[0]
        
        save_properties(properties)
        flash('Property updated successfully!', 'success')
        return redirect(url_for('dashboard'))
    
    return render_template('edit_property.html', property=property)

@app.route('/admin/delete/<int:prop_id>')
@login_required
def delete_property(prop_id):
    properties = load_properties()
    properties = [p for p in properties if p['id'] != prop_id]
    save_properties(properties)
    flash('Property deleted successfully!', 'success')
    return redirect(url_for('dashboard'))

@app.route('/api/properties')
def api_properties():
    properties = load_properties()
    return jsonify(properties)

@app.route('/api/inquiry', methods=['POST'])
def api_inquiry():
    data = request.json
    inquiries_file = 'data/inquiries.json'
    
    inquiries = []
    if os.path.exists(inquiries_file):
        with open(inquiries_file, 'r') as f:
            inquiries = json.load(f)
    
    inquiry = {
        'id': len(inquiries) + 1,
        'name': data.get('name'),
        'email': data.get('email'),
        'phone': data.get('phone'),
        'message': data.get('message'),
        'property_id': data.get('property_id'),
        'property_title': data.get('property_title'),
        'read': False
    }
    
    inquiries.append(inquiry)
    with open(inquiries_file, 'w') as f:
        json.dump(inquiries, f, indent=2)
    
    return jsonify({'success': True, 'message': 'Inquiry submitted successfully!'})

@app.route('/admin/inquiries')
@login_required
def inquiries():
    inquiries_file = 'data/inquiries.json'
    inquiries = []
    if os.path.exists(inquiries_file):
        with open(inquiries_file, 'r') as f:
            inquiries = json.load(f)
    return render_template('inquiries.html', inquiries=inquiries)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

# For production
if __name__ != '__main__':
    # Ensure data files exist
    if not os.path.exists(DATA_FILE):
        save_properties([])
