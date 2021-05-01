from flask import Flask,jsonify,request,make_response
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import pymysql


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:''@localhost/corestoreexpress'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)
bcrypt = Bcrypt(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    
    password = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

class Wells(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sampletype = db.Column(db.String(80), nullable=True)
    layer = db.Column(db.String(80),  nullable=True)
    initialdepth = db.Column(db.String(120),  nullable=True)
    terminationdepth = db.Column(db.String(120),  nullable=True)
    samplebucket = db.Column(db.String(120),  nullable=True)
    wellname = db.Column(db.String(120),  nullable=False)

    def __repr__(self):
        return '<Wells %r>' % self.sampletype

class Wellbore(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    wellboreofficialname= db.Column(db.String(80),  nullable=False)
    wellborelocalname= db.Column(db.String(80),  nullable=True)
    wellborealiasname= db.Column(db.String(120),  nullable=True)
    wellborespuddate= db.Column(db.String(120),  nullable=True)
    spudyear= db.Column(db.String(120),  nullable=True)
    wellboretypeid= db.Column(db.String(120),  nullable=True)
    initialwellborepurposeid= db.Column(db.String(120),  nullable=True)
    

    def __repr__(self):
        return '<Wellbore %r>' % self.wellboreofficialname

class Wellborecore(db.Model):
    
    id = db.Column(db.Integer,primary_key =True)
    corenumber= db.Column(db.Float, nullable=False)
    coredate= db.Column(db.String(100), nullable=False)
    wellborename = db.Column(db.String(200), nullable=False)
    coringcontractor = db.Column(db.String(200), nullable=False)
    coretopmdrt= db.Column(db.String(100), nullable=False)
    corebottommdrt= db.Column(db.String(100), nullable=False)
    coretoptvd= db.Column(db.String(100), nullable=False)
    corebottomtvd= db.Column(db.String(100), nullable=False)
    cutlength= db.Column(db.String(100), nullable=False)
    cutlengthtvd= db.Column(db.String(100), nullable=True)
    recoveredlength= db.Column(db.String(100), nullable=True)
    corerecovery= db.Column(db.String(100), nullable=True)
    topformation= db.Column(db.String(200), nullable=False)
    bottomformation = db.Column(db.String(100), nullable=True)
    wellborecorename = db.Column(db.String(100), nullable=True)
    corepicturesoftcopypath = db.Column(db.String(100), nullable=True)
    corepicturehyperlink= db.Column(db.String(200), nullable=True)
    corereportsoftcopypath= db.Column(db.String(100), nullable=True)
    corereporthyperlink= db.Column(db.String(200), nullable=True)
    documentformat = db.Column(db.String(100), nullable=True)
    filesize= db.Column(db.String(20), nullable=True)
    securitygrade = db.Column(db.String(100), nullable=True)
    openduedate= db.Column(db.String(20), nullable=True)
    comments= db.Column(db.String(100), nullable=True)
    documenttitle= db.Column(db.String(200), nullable=True)
    receivedate= db.Column(db.String(100), nullable=True)
    documentdate= db.Column(db.String(100), nullable=True)
    documentname= db.Column(db.String(200), nullable=True)
    cored= db.Column(db.String(100), nullable=True)
    
    createdby = db.Column(db.String(100), nullable=True)
    datecreated= db.Column(db.String(20), nullable=True)
    modifiedon = db.Column(db.String(100), nullable=True)
    modifiedby= db.Column(db.String(200), nullable=True)
    pictureuploaddate= db.Column(db.String(100), nullable=True)
    reportuploaddate= db.Column(db.String(200), nullable=True)
    recorddate = db.Column(db.String(100))

    def __repr__(self):
        return '<Wellborecore%r>' % self.corenumber
    
class Category(db.Model):
    id = db.Column(db.Integer,primary_key =True)
    wasanalysed= db.Column(db.String(50), nullable=True)
    coretype= db.Column(db.String(100), nullable=True)
    storeidentifier = db.Column(db.String(100), nullable=True)
    catalogcorefromdepth= db.Column(db.Float, nullable=True)
    catalogcoretodepth= db.Column(db.Float, nullable=True)
    coresecurityflag= db.Column(db.String(200), nullable=True)
    catalogcorelength= db.Column(db.Float, nullable=True)
    hascorephotos= db.Column(db.String(20), nullable=True)
    wellborecorename = db.Column(db.String(100), nullable=True)
    topcoreformation= db.Column(db.String(20), nullable=True)
    bottomcoreformation = db.Column(db.String(100), nullable=True)
    catalogpicturename= db.Column(db.String(20), nullable=True)
    catalogpicturesoftcopypath = db.Column(db.String(100), nullable=True)
    catalogpicturehyperlink= db.Column(db.String(200), nullable=True)
    catalogreportsoftcopypath= db.Column(db.String(100), nullable=True)
    catalogreporthyperlink= db.Column(db.String(200), nullable=True)
    documentformat = db.Column(db.String(100), nullable=True)
    filesize= db.Column(db.String(20), nullable=True)
    securitygrade = db.Column(db.String(100), nullable=True)
    openduedate= db.Column(db.String(20), nullable=True)
    comments= db.Column(db.String(100), nullable=True)
    corecatalogname= db.Column(db.String(200), nullable=True)
    welloperator= db.Column(db.String(100), nullable=True)
    wellbore= db.Column(db.String(200), nullable=True)
    spuddate= db.Column(db.String(100), nullable=True)
    corename= db.Column(db.String(200), nullable=True)
    coredate= db.Column(db.String(100), nullable=True)
   
    createdby = db.Column(db.String(100), nullable=True)
    datecreated= db.Column(db.String(20), nullable=True)
    modifiedon = db.Column(db.String(100), nullable=True)
    modifiedby= db.Column(db.String(200), nullable=True)
    pictureuploaddate= db.Column(db.String(100), nullable=True)
    reportuploaddate= db.Column(db.String(200), nullable=True)
    recorddate = db.Column(db.String(100))

    def __repr__(self):
        return '<Category %r>' % self.storeidentifier
        

@app.route('/create',methods=['POST'])
def create_user():
    data = request.get_json()
    pw_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(email = data['email'], password = pw_hash)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"new user is successfully created"})

@app.route('/',methods=['GET'])

def getusers():
    users = User.query.all()

    output = []

    for user in users:
        user_data ={}
        user_data['email'] = user.email
        user_data['password'] = user.password
        

        output.append(user_data)

    return jsonify({"users":output})

@app.route('/getoneuser/<int:id>',methods=['GET'])

def getuser(id):
    user = User.query.filter_by(id=id).first()

    if not user:
        return jsonify({"'message":"No User Found"})

    user_data ={}
    user_data['email'] = user.email
    user_data['password'] = user.password
    user_data['username'] = user.username

    return jsonify({"user":user_data})
    
@app.route('/user/<int:id>',methods=['DELETE'])

def removeuser(id):
    user = User.query.filter_by(id=id).first()

    if not user:
        return jsonify({"'message":"No User Found"})

    db.session.delete(user)
    db.session.commit()

    return jsonify({"message":"User successfully deleted"})

@app.route('/login',methods=['POST','GET'])
def login():

  if request.method == 'POST':
    
    content = request.get_json()

    print(content)

    email = content['email']
    
    password = content['password']

    user = User.query.filter_by(email = email).first()
                    
    if user:
        if bcrypt.check_password_hash(user.password,password):
            
            return jsonify({"msg":'You have successfully logged in'})
        
        else:
            return make_response ('Incorrect Email or Password',401,{'WWW-Aunthentication': 'Basic realm: "Login Required !!!"'})


    return make_response ('Incorrect Email or Password',401,{'WWW-Aunthentication': 'Basic realm: "Login Required !!!"'})

@app.route("/wells",methods=['POST','GET'])
def wells():
    if request.method == 'POST':

        data = request.get_json()

        new_wells = Wells(wellname = data['wellname'], layer = data['layer'], terminationdepth = data['terminationdepth'],
                           samplebucket = data['samplebucket'],initialdepth = data['initialdepth'],sampletype = data['sampletype'])

        db.session.add(new_wells)

        db.session.commit()

        return jsonify({"message":"new wells data is successfully created"})

    if request.method == 'GET':

        wells = Wells.query.all()

        output=[]

    for well in wells:

        well_data ={}

        well_data['id'] = well.id
        well_data['wellname'] = well.wellname
        well_data['layer'] = well.layer
        well_data['sampletype'] = well.sampletype
        well_data['samplebucket'] = well.samplebucket
        well_data['initialdepth'] = well.initialdepth
        well_data['terminationdepth'] = well.terminationdepth

        output.append(well_data)

    return jsonify({"results":output})

@app.route('/wells/<int:id>',methods =['DELETE','PUT'])
def changewells(id):

    if request.method == 'DELETE':

        wells = Wells.query.filter_by(id=id).first()

        if not wells:
            return jsonify({'message':'NO Wells Data Found'})

        db.session.delete(wells)
        db.session.commit()

        return jsonify({'message':'Wells Data has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        wells = Wells.query.filter_by(id=id).first()

        if not wells:
            return jsonify({'message':'NO Wells Data Found'})
        
        wells.wellname = data['wellname']
        wells.layer =data['layer']
        wells.sampletype = data['sampletype']
        wells.samplebucket = data['samplebucket']
        wells.initialdepth =data['initialdepth']
        wells.terminationdepth = data['terminationdepth']

        db.session.commit()

        return jsonify({"message":"wells has been Successfully Updated"})

@app.route('/wells/<int:id>',methods =['GET'])
def getonewell(id):

    wells = Wells.query.filter_by(id=id).first()

    if not wells:
        return jsonify({"'message":"No Wells Data Found"})

    wells_data ={}

    wells_data['id'] = wells.id
    wells_data['wellname'] = wells.wellname
    wells_data['layer'] = wells.layer
    wells_data['sampletype'] = wells.sampletype
    wells_data['samplebucket'] = wells.samplebucket
    wells_data['initialdepth'] = wells.initialdepth
    wells_data['terminationdepth'] = wells.terminationdepth


    return jsonify({"wells":wells_data})

@app.route('/wellbore',methods=['POST','GET'])
def wellbore():

    if request.method == 'POST':

        data = request.get_json()

        new_wellbore = Wellbore(wellboreofficialname = data['wellboreofficialname'], wellborealiasname = data['wellborealiasname'], spudyear= data['spudyear'],
                           wellborelocalname = data['wellborelocalname'],wellborespuddate= data['wellborespuddate'],
                           wellboretypeid = data['wellboretypeid'],initialwellborepurposeid = data['initialwellborepurposeid'],
                           )

        db.session.add(new_wellbore)

        db.session.commit()

        return jsonify({"message":"new wellbore is successfully created"})

    if request.method == 'GET':

        wellbores = Wellbore.query.all()

        output=[]

    for wellbore in wellbores:

        wellbore_data ={}

        wellbore_data['id'] = wellbore.id
        wellbore_data['spudyear'] = wellbore.spudyear
        wellbore_data['wellboreofficialname'] = wellbore.wellboreofficialname
        wellbore_data['wellborelocalname'] = wellbore.wellborelocalname
        wellbore_data['wellborealiasname'] = wellbore.wellborealiasname
        wellbore_data['wellboretypeid'] = wellbore.wellboretypeid
        wellbore_data['initialwellborepurposeid'] = wellbore.initialwellborepurposeid
        wellbore_data['wellborespuddate'] = wellbore.wellborespuddate

        output.append(wellbore_data)

    return jsonify({"results":output})

@app.route('/wellbore/<int:id>',methods =['DELETE','PUT'])
def changewellbore(id):

    if request.method == 'DELETE':

        wellbore= Wellbore.query.filter_by(id=id).first()

        if not wellbore:
            return jsonify({'message':'NO wellbore Found'})

        db.session.delete(wellbore)
        db.session.commit()

        return jsonify({'message':'The Wellbore has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        wellbore = Wellbore.query.filter_by(id=id).first()

        if not wellbore:
            return jsonify({'message':'NO wellbore Found'})

        wellbore.spudyear = data['spudyear']
        wellbore.wellboreofficialname = data['wellboreofficialname'] 
        wellbore.wellborelocalname = data['wellborelocalname']
        wellbore.wellborealiasname = data['wellborealiasname']
        wellbore.wellboretypeid = data['wellboretypeid']
        wellbore.wellborespuddate = data['wellborespuddate']
        wellbore.initialwellborepurposeid = data['initialwellborepurposeid']
        
        
        db.session.commit()

        return jsonify({"message":"wellbore has been Successfully Updated"})

@app.route('/wellbore/<int:id>',methods =['GET'])
def getonewellbore(id):

    wellbore = Wellbore.query.filter_by(id=id).first()

    if not wellbore:
        return jsonify({"'message":"No Wellbore Found"})

    wellbore_data ={}

    wellbore_data['id'] = wellbore.id
    wellbore_data['wellboreofficialname'] = wellbore.wellboreofficialname
    wellbore_data['wellborelocalname'] = wellbore.wellborelocalname
    wellbore_data['wellborealiasname'] = wellbore.wellborealiasname
    wellbore_data['spudyear'] = wellbore.spudyear
    wellbore_data['wellborespuddate'] = wellbore.wellborespuddate
    wellbore_data['initialwellborepurposeid'] = wellbore.initialwellborepurposeid
    wellbore_data['wellboretypeid'] = wellbore.wellboretypeid
    

    return jsonify({"wellbore":wellbore_data})

@app.route('/wellborecore',methods=['POST','GET'])
def wellborecore():

    if request.method == 'POST':

        data = request.get_json()

        new_wellborecore = Wellborecore(wellborename = data['wellborename'], coredate= data['coredate'],
                           corenumber = data['corenumber'],coringcontractor = data['coringcontractor'],
                           coretopmdrt = data['coretopmdrt'],corebottommdrt = data['corebottommdrt'],
                           coretoptvd = data['coretoptvd'],corebottomtvd = data['corebottomtvd'],
                           cutlength = data['cutlength'],cutlengthtvd = data['cutlengthtvd'],bottomformation = data['bottomformation'],corepicturesoftcopypath = data['corepicturesoftcopypath'],
                           corerecovery = data['corerecovery'],topformation = data['topformation'],corepicturehyperlink = data['corepicturehyperlink'],
                           corereportsoftcopypath = data['corereportsoftcopypath'],corereporthyperlink = data['corereporthyperlink'],
                           documentformat = data['documentformat'],filesize = data['filesize'],securitygrade = data['securitygrade'],
                           openduedate = data['openduedate'],documenttitle = data['documenttitle'],comments = data['comments'],
                           receivedate = data['receivedate'],createdby = data['createdby'],datecreated = data['datecreated'],
                           cored = data['cored'],modifiedon = data['modifiedon'],modifiedby = data['modifiedby'],pictureuploaddate = data['pictureuploaddate'],
                           documentdate = data['documentdate'],documentname = data['documentname'],reportuploaddate = data['reportuploaddate'])

        db.session.add(new_wellborecore)

        db.session.commit()

        return jsonify({"message":"new Wellborecore Data is successfully created"})

    if request.method == 'GET':

        items = Wellborecore.query.all()

        output=[]

    for item in items:

        item_data ={}

        item_data['id'] = item.id
        item_data['createdby'] = item.createdby
        item_data['modifiedon'] = item.modifiedon
        item_data['modifiedby'] = item.modifiedby
     
        item_data['cored'] = item.cored
        item_data['pictureuploaddate'] = item.pictureuploaddate
        item_data['documentdate'] = item.documentdate
        item_data['documentname'] = item.documentname
        item_data['reportuploaddate'] = item.reportuploaddate
        
        item_data['datecreated'] = item.datecreated
        item_data['receivedate'] = item.receivedate
        item_data['comments'] = item.comments
        item_data['documenttitle'] = item.documenttitle
        item_data['openduedate'] = item.openduedate
        item_data['securitygrade'] = item.securitygrade
        item_data['filesize'] = item.filesize
        item_data['documentformat'] = item.documentformat
        item_data['corereporthyperlink'] = item.corereporthyperlink
        item_data['corereportsoftcopypath'] = item.corereportsoftcopypath
        item_data['corepicturehyperlink'] = item.corepicturehyperlink
        item_data['corepicturesoftcopypath'] = item.corepicturesoftcopypath
        item_data['bottomformation'] = item.bottomformation
        item_data['topformation'] = item.topformation
        item_data['corerecovery'] = item.corerecovery
        item_data['recoveredlength'] = item.recoveredlength
        item_data['cutlength'] = item.cutlength
        item_data['cutlengthtvd'] = item.cutlengthtvd
        item_data['corebottomtvd'] = item.corebottomtvd
        item_data['coretoptvd'] = item.coretoptvd
        item_data['corebottommdrt'] = item.corebottommdrt
        item_data['coretopmdrt'] = item.coretopmdrt
        item_data['coringcontractor'] = item.coringcontractor
        item_data['coredate'] = item.coredate
        item_data['corenumber'] = item.corenumber
        item_data['wellborename'] = item.wellborename

        output.append(item_data)

    return jsonify({"results":output})

@app.route('/wellborecore/<int:id>',methods =['DELETE','PUT'])
def changewellborecore(id):

    if request.method == 'DELETE':

        item = Wellborecore.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO wellborecore Found'})

        db.session.delete(item)
        db.session.commit()

        return jsonify({'message':'The wellborecore Data has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        item = Wellborecore.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO item Found'})

        item.createdby = data['createdby']
        item.modifiedon = data['modifiedon']
        item.modifiedby = data['modifiedby']
        item.cored     = data['cored']
        item.pictureuploaddate = data['pictureuploaddate']
        item.documentdate= data['documentdate'] 
        item.documentname= data['documentname']
        item.reportuploaddate= data['reportuploaddate'] 
        item.datecreated= data['datecreated']
        item.receivedate = data['receivedate']
        item.comments = data['comments']
        item.documenttitle = data['documenttitle']
        item.openduedate = data['openduedate']
        item.securitygrade = data['securitygrade']
        item.filesize  = data['filesize']
        item.documentformat = data['documentformat']
        item.corereporthyperlink = data['corereporthyperlink']
        item.corereportsoftcopypath = data['corereportsoftcopypath']
        item.corepicturehyperlink = data['corepicturehyperlink']
        item.corepicturesoftcopypath = data['corepicturesoftcopypath']
        item.bottomformation = data['bottomformation']
        item.topformation = data['topformation']
        item.corerecovery  = data['corerecovery']
        item.recoveredlength = data['recoveredlength']
        item.cutlength = data['cutlength']
        item.cutlengthtvd = data['cutlengthtvd'] 
        item.corebottomtvd = data['corebottomtvd']
        item.coretoptvd = data['coretoptvd']
        item.corebottommdrt = data['corebottommdrt']
        item.coretopmdrt = data['coretopmdrt']
        item.coringcontractor = data['coringcontractor']
        item.coredate = data['coredate']
        item.corenumber = data['corenumber'] 
        item.wellborename = data['wellborename']
                
        db.session.commit()

        return jsonify({"message":"Wellborecore has been Successfully Updated"})

@app.route('/wellborecore/<int:id>',methods =['GET'])
def getonewellborecore(id):

    item = Wellborecore.query.filter_by(id=id).first()

    if not item:
        return jsonify({"'message":"No item Found"})

    item_data ={}

    item_data['id'] = item.id
    item_data['createdby'] = item.createdby
    item_data['modifiedon'] = item.modifiedon
    item_data['modifiedby'] = item.modifiedby
    
    item_data['cored'] = item.cored
    item_data['pictureuploaddate'] = item.pictureuploaddate
    item_data['documentdate'] = item.documentdate
    item_data['documentname'] = item.documentname
    item_data['reportuploaddate'] = item.reportuploaddate
    
    item_data['datecreated'] = item.datecreated
    item_data['receivedate'] = item.receivedate
    item_data['comments'] = item.comments
    item_data['documenttitle'] = item.documenttitle
    item_data['openduedate'] = item.openduedate
    item_data['securitygrade'] = item.securitygrade
    item_data['filesize'] = item.filesize
    item_data['documentformat'] = item.documentformat
    item_data['corereporthyperlink'] = item.corereporthyperlink
    item_data['corereportsoftcopypath'] = item.corereportsoftcopypath
    item_data['corepicturehyperlink'] = item.corepicturehyperlink
    item_data['corepicturesoftcopypath'] = item.corepicturesoftcopypath
    item_data['bottomformation'] = item.bottomformation
    item_data['topformation'] = item.topformation
    item_data['corerecovery'] = item.corerecovery
    item_data['recoveredlength'] = item.recoveredlength
    item_data['cutlength'] = item.cutlength
    item_data['cutlengthtvd'] = item.cutlengthtvd
    item_data['corebottomtvd'] = item.corebottomtvd
    item_data['coretoptvd'] = item.coretoptvd
    item_data['corebottommdrt'] = item.corebottommdrt
    item_data['coretopmdrt'] = item.coretopmdrt
    item_data['coringcontractor'] = item.coringcontractor
    item_data['coredate'] = item.coredate
    item_data['corenumber'] = item.corenumber
    item_data['wellborename'] = item.wellborename

    return jsonify({"wellborecore":item_data})
    

@app.route('/category',methods=['POST','GET'])
def category():

    if request.method == 'POST':

        data = request.get_json()

        new_item = Category(wasanalysed = data['wasanalysed'], coretype= data['coretype'],
                           storeidentifier = data['storeidentifier'],catalogcorefromdepth = data['catalogcorefromdepth'],
                           catalogcoretodepth= data['catalogcoretodepth'],
                           coresecurityflag = data['coresecurityflag'],catalogcorelength = data['catalogcorelength'],
                           hascorephotos = data['hascorephotos'],wellborecorename = data['wellborecorename'],
                           topcoreformation = data['topcoreformation'],bottomcoreformation = data['bottomcoreformation'],
                           catalogpicturename = data['catalogpicturename'],catalogpicturesoftcopypath = data['catalogpicturesoftcopypath'],
                           catalogpicturehyperlink = data['catalogpicturehyperlink'],catalogreportsoftcopypath = data['catalogreportsoftcopypath'],
                           catalogreporthyperlink= data['catalogreporthyperlink'],
                           documentformat = data['documentformat'],filesize = data['filesize'],securitygrade= data['securitygrade'],
                           openduedate = data['openduedate'],comments = data['comments'],corecatalogname= data['corecatalogname'],
                           welloperator = data['welloperator'],wellbore = data['wellbore'],spuddate= data['spuddate'],
                           corename = data['corename'],coredate = data['coredate'],createdby= data['createdby'],
                           datecreated = data['datecreated'],modifiedon = data['modifiedon'],modifiedby= data['modifiedby'],
                           pictureuploaddate = data['pictureuploaddate'],reportuploaddate = data['reportuploaddate'],
                           recorddate= data['recorddate'])

        db.session.add(new_item)

        db.session.commit()

        return jsonify({"message":"new  Data is successfully created"})

    if request.method == 'GET':

        items = Category.query.all()

        output=[]

    for item in items:

        item_data ={}

        item_data['id'] = item.id
        item_data['wasanalysed'] = item.wasanalysed
        item_data['coretype'] = item.coretype
        item_data['storeidentifier'] = item.storeidentifier
     
        item_data['catalogcorefromdepth'] = item.catalogcorefromdepth
        item_data['catalogcoretodepth'] = item.catalogcoretodepth
        item_data['coresecurityflag'] = item.coresecurityflag
        item_data['catalogcorelength'] = item.catalogcorelength
        item_data['hascorephotos'] = item.hascorephotos
        item_data['wellborecorename'] = item.wellborecorename
        item_data['topcoreformation'] = item.topcoreformation
        item_data['bottomcoreformation'] = item.bottomcoreformation
        item_data['catalogpicturename'] = item.catalogpicturename
        item_data['catalogpicturesoftcopypath'] = item.catalogpicturesoftcopypath
        item_data['catalogpicturehyperlink'] = item.catalogpicturehyperlink
        item_data['catalogreportsoftcopypath'] = item.catalogreportsoftcopypath
        item_data['catalogreporthyperlink'] = item.catalogreporthyperlink
        item_data['spuddate'] = item.spuddate
        item_data['documentformat'] = item.documentformat
        item_data['filesize'] = item.filesize
        item_data['securitygrade'] = item.securitygrade
        item_data['openduedate'] = item.openduedate
        item_data['comments'] = item.comments
        item_data['corecatalogname'] = item.corecatalogname
        item_data['welloperator'] = item.welloperator
        item_data['wellbore'] = item.wellbore
        item_data['corename'] = item.corename
        item_data['coredate'] = item.coredate
        item_data['createdby'] = item.createdby
        item_data['datecreated'] = item.datecreated
        item_data['modifiedon'] = item.modifiedon
        item_data['modifiedby'] = item.modifiedby
        item_data['pictureuploaddate'] = item.pictureuploaddate
        item_data['reportuploaddate'] = item.reportuploaddate
        item_data['recorddate'] = item.recorddate
        
        output.append(item_data)

    return jsonify({"results":output})

@app.route('/category/<int:id>',methods =['DELETE','PUT'])
def changecategory(id):

    if request.method == 'DELETE':

        item = Category.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO Category Data Found'})

        db.session.delete(item)
        db.session.commit()

        return jsonify({'message':'The Data has been deleted'})

    if request.method == 'PUT':

        data =request.get_json()
       
        item = Category.query.filter_by(id=id).first()

        if not item:
            return jsonify({'message':'NO item Found'})

        item.coretype = data['coretype']
        item.storeidentifier = data['storeidentifier']
        item.catalogcorefromdepth = data['catalogcorefromdepth']
        item.wasanalysed = data['wasanalysed']
        item.catalogcoretodepth = data['catalogcoretodepth']
        item.coresecurityflag = data['coresecurityflag']
        item.catalogcorelength = data['catalogcorelength']
        item.hascorephotos = data['hascorephotos']
        item.wellborecorename = data['wellborecorename']
        item.topcoreformation = data['topcoreformation']
        item.bottomcoreformation = data['bottomcoreformation']
        item.catalogpicturename = data['catalogpicturename']
        item.catalogpicturesoftcopypath = data['catalogpicturesoftcopypath']
        item.catalogpicturehyperlink = data['catalogpicturehyperlink']
        item.catalogreportsoftcopypath = data['catalogreportsoftcopypath']
        item.catalogreporthyperlink = data['catalogreporthyperlink']
        item.spuddate = data['spuddate']
        item.documentformat = data['documentformat']
        item.filesize = data['filesize']
        item.securitygrade = data['securitygrade']
        item.openduedate = data['openduedate']
        item.comments = data['comments']
        item.corecatalogname = data['corecatalogname']
        item.welloperator = data['welloperator']
        item.wellbore = data['wellbore']
        item.corename = data['corename']
        item.coredate = data['coredate']
        item.createdby = data['createdby']
        item.datecreated = data['datecreated']
        item.modifiedon = data['modifiedon']
        item.modifiedby = data['modifiedby']
        item.pictureuploaddate = data['pictureuploaddate']
        item.reportuploaddate = data['reportuploaddate']
        item.recorddate = data['recorddate']
        
        db.session.commit()

        return jsonify({"message":" Data has been Successfully Updated"})

@app.route('/category/<int:id>',methods =['GET'])
def getonecategory(id):

    item = Category.query.filter_by(id=id).first()

    if not item:
        return jsonify({"'message":"No Data Found"})

    item_data ={}

    item_data['id'] = item.id
    item_data['wasanalysed'] = item.wasanalysed
    item_data['coretype'] = item.coretype
    item_data['storeidentifier'] = item.storeidentifier
    
    item_data['catalogcorefromdepth'] = item.catalogcorefromdepth
    item_data['catalogcoretodepth'] = item.catalogcoretodepth
    item_data['coresecurityflag'] = item.coresecurityflag
    item_data['catalogcorelength'] = item.catalogcorelength
    item_data['hascorephotos'] = item.hascorephotos
    item_data['wellborecorename'] = item.wellborecorename
    item_data['topcoreformation'] = item.topcoreformation
    item_data['bottomcoreformation'] = item.bottomcoreformation
    item_data['catalogpicturename'] = item.catalogpicturename
    item_data['catalogpicturesoftcopypath'] = item.catalogpicturesoftcopypath
    item_data['catalogpicturehyperlink'] = item.catalogpicturehyperlink
    item_data['catalogreportsoftcopypath'] = item.catalogreportsoftcopypath
    item_data['catalogreporthyperlink'] = item.catalogreporthyperlink
    item_data['spuddate'] = item.spuddate
    item_data['documentformat'] = item.documentformat
    item_data['filesize'] = item.filesize
    item_data['securitygrade'] = item.securitygrade
    item_data['openduedate'] = item.openduedate
    item_data['comments'] = item.comments
    item_data['corecatalogname'] = item.corecatalogname
    item_data['welloperator'] = item.welloperator
    item_data['wellbore'] = item.wellbore
    item_data['corename'] = item.corename
    item_data['coredate'] = item.coredate
    item_data['createdby'] = item.createdby
    item_data['datecreated'] = item.datecreated
    item_data['modifiedon'] = item.modifiedon
    item_data['modifiedby'] = item.modifiedby
    item_data['pictureuploaddate'] = item.pictureuploaddate
    item_data['reportuploaddate'] = item.reportuploaddate
    item_data['recorddate'] = item.recorddate

    return jsonify({"category":item_data})



if __name__ == '__main__':
    app.run(debug=True)