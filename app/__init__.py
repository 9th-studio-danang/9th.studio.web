from flask import Flask, render_template

from .const.landing_page_tattoos_list import TATTOOS_LIST

flask_app = Flask(__name__)

@flask_app.route("/")
@flask_app.route("/home")
def home():
    return render_template("index.html", tattoos_list=TATTOOS_LIST)
