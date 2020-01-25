#UCSD RPL Base11 GUI

This repo contains the code necessary to visualize telemetry from Marginal Stability as it is sent through the command box.
This whole project is designed to run without WiFi, only a local, wired serial connection between the command box
arduino and the laptop being used.

##To install:
1. Clone the git repo using `git clone`
2. Use `cd` to navigate to the project directory
3. Run `npm install` in your CLI to install the necessary node modules
4. Make sure you have python3 and sys, serial, time, and json installed. If you don't have a module, run `pip install [MODULE]`

##To start dashboard:
1. Run `npm start` to start the project server. If it doesn't open in your default browser, go to `http://localhost:3000/`
2. Run `cd src` in your CLI
3. Plug in the command box to your laptop's USB port
4. Find the port it's connected to (use the Arduino app to do this, or `ls /dev/` on Terminal to tyr and narrow it down)
5. Run `python realSerialInput.py --[serial port]` to start the data collection
