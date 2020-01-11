import sys
import serial
import time
import json
import pandas as pd

baudRate = 115200
ser1 = serial.Serial()

def getData():
    text = ser1.readline().strip()
    while str(text[0:4]) != 'b\'PT1:\'':
        print("failed! string was " + str(text[0:3]))
        text = ser1.readline().strip()
    # f.write(str(text) + "\n")
    print(str(text))
    data = str(text)[2:-1].split(';')
    print(data)
    datastore = {
        "connectionStatus": 1,
        "timestamp": time.time(),
        "PT1_ss": data[0].split(":")[1].split(",")[0],
        "PT1_readout": data[0].split(":")[1].split(",")[1],
        "PT2_ss": data[1].split(":")[1].split(",")[0],
        "PT2_readout": data[1].split(":")[1].split(",")[1],
        "PT3_ss": data[2].split(":")[1].split(",")[0],
        "PT3_readout": data[2].split(":")[1].split(",")[1],
        "PT4_ss": data[3].split(":")[1].split(",")[0],
        "PT4_readout": data[3].split(":")[1].split(",")[1],
        "PT5_ss": data[4].split(":")[1].split(",")[0],
        "PT5_readout": data[4].split(":")[1].split(",")[1],
        "PT6_ss": data[5].split(":")[1].split(",")[0],
        "PT6_readout": data[5].split(":")[1].split(",")[1],
        "PT7_ss": data[6].split(":")[1].split(",")[0],
        "PT7_readout": data[6].split(":")[1].split(",")[1],
        "PT8_ss": data[7].split(":")[1].split(",")[0],
        "PT8_readout": data[7].split(":")[1].split(",")[1],
        "TC1": data[8].split(":")[1],
        "TC2": data[9].split(":")[1],
        "TC3": data[10].split(":")[1],
        "TC4": data[11].split(":")[1],
        "TC5": data[12].split(":")[1],
        "TC6": data[13].split(":")[1],
        "TC7": data[14].split(":")[1],
        "TC8": data[15].split(":")[1],
        "Alt": data[16].split(":")[1],
        "xTilt": data[17].split(":")[1].split(",")[0],
        "yTilt": data[17].split(":")[1].split(",")[1],
        "Lat": data[18].split(":")[1].split(",")[0],
        "Lon": data[18].split(":")[1].split(",")[1],
        "FS": data[19].split(":")[1],
        "PS_drogue": data[20].split(":")[1].split(",")[0],
        "PS_main": data[20].split(":")[1].split(",")[1]
    }
    return datastore

print("DataReader starting. To stop, press Control+C at any time.")
time.sleep(2)
while True:
    try:
        ser1 = serial.Serial(sys.argv[1], baudRate)
        connected = True
    except serial.serialutil.SerialException:
        connected = False

    if connected:
        print("Connected!")
        with open('data.json', 'w+') as f:
            json.dump(getData(), f, indent="\t")
        # pushToCSV()
    else:
        print("Not connected!")
        datastore = {
            "connectionStatus": 0,
            "timestamp": time.time(),
            "PT1_ss": 0,
            "PT1_readout": 0,
            "PT2_ss": 0,
            "PT2_readout": 0,
            "PT3_ss": 0,
            "PT3_readout": 0,
            "PT4_ss": 0,
            "PT4_readout": 0,
            "PT5_ss": 0,
            "PT5_readout": 0,
            "PT6_ss": 0,
            "PT6_readout": 0,
            "PT7_ss": 0,
            "PT7_readout": 0,
            "PT8_ss": 0,
            "PT8_readout": 0,
            "TC1": 0,
            "TC2": 0,
            "TC3": 0,
            "TC4": 0,
            "TC5": 0,
            "TC6": 0,
            "TC7": 0,
            "TC8": 0,
            "Alt": 0,
            "xTilt": 0,
            "yTilt": 0,
            "Lat": 0,
            "Lon": 0,
            "FS": 0,
            "PS_drogue": 0,
            "PS_main": 0
        }
        with open('data.json', 'w') as f:
            json.dump(datastore, f, indent="\t")
    time.sleep(2)

#----------------
while True:
    print("Opening comm port " + sys.argv[1])
    try:
        ser1 = serial.Serial(sys.argv[1], 115200)
        connected = True
    except serial.serialutil.SerialException:
        print("Command Box not connected!")
        connected = False
    if connected:
        datastore['connectionStatus'] = 1
        with open('data.json', 'w') as f:
            json.dump(datastore, f)
        time.sleep(1)
    else:
        datastore['connectionStatus'] = 0
        with open('data.json', 'w') as f:
            json.dump(datastore, f)
        time.sleep(1)

f = open(sys.argv[2],"w+")
# ​
print("Files open waiting for arduino ")
time.sleep(2)
print("Starting read")
# ​
# while True:
    # get line of telemetry data
text = ser1.readline().strip()
while str(text[0:3]) != 'b\'PT1\'':
    print("failed! string was " + str(text[0:3]))
    text = ser1.readline().strip()
# f.write(str(text) + "\n")
print(str(text))
data = str(text)[2:].split(';')
print(data)
for i in range(len(data)):
    data[i] = data[i].split(":")
print(data)
df = pd.DataFrame(columns=['timestamp', 'PT1_ss', 'PT1_readout', 'PT2_ss', 'PT2_readout', 'PT3_ss', 'PT3_readout', 'PT4_ss', 'PT4_readout',
                        'PT5_ss', 'PT5_readout', 'PT6_ss', 'PT6_readout', 'PT7_ss', 'PT7_readout', 'PT8_ss', 'PT8_readout',
                        'TC1', 'TC2', 'TC3', 'TC4', 'TC5', 'TC6', 'TC7', 'TC8', 'Alt', 'xTilt', 'yTilt', 'Lat', 'Lon', 'FS', 'PS_drogue', 'PS_main'])
