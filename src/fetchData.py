import sys
import asyncio
import websockets
import serial
import json
import time
from threading import Thread



baudRate = 115200
last_received = ''
test_datastore = {
    "connectionStatus": 1,
    "timestamp": 0,
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
    "FS": 4,
    "PS_drogue": 0,
    "PS_main": 0,
    "Vel": 0
};

def receiving(ser):
    global last_received

    buffer_string = ''
    while True:
        buffer_string = buffer_string + str(ser.read(ser.inWaiting()))
        if '\n' in buffer_string:
            lines = buffer_string.split('\n') # Guaranteed to have at least 2 entries
            last_received = lines[-2]
            #If the Arduino sends lots of empty lines, you'll lose the
            #last filled line, so you could make the above statement conditional
            #like so: if lines[-2]: last_received = lines[-2]
            buffer_string = lines[-1]

def get_data_old(serial_port):
    text = serial_port.readline().strip()
    while str(text[0:4]) != 'b\'PT1:\'':
        print("failed! string was " + str(text[0:3]))
        text = serial_port.readline().strip()
    # f.write(str(text) + "\n")
    data = str(text)[2:-1].split(';')
        
    datastore = {
        "connectionStatus": 1,
        "timestamp": time.time(),
        "PT1_ss": int(data[0].split(":")[1].split(",")[0]),
        "PT1_readout": float(data[0].split(":")[1].split(",")[1]),
        "PT2_ss": int(data[1].split(":")[1].split(",")[0]),
        "PT2_readout": float(data[1].split(":")[1].split(",")[1]),
        "PT3_ss": int(data[2].split(":")[1].split(",")[0]),
        "PT3_readout": float(data[2].split(":")[1].split(",")[1]),
        "PT4_ss": int(data[3].split(":")[1].split(",")[0]),
        "PT4_readout": float(data[3].split(":")[1].split(",")[1]),
        "PT5_ss": int(data[4].split(":")[1].split(",")[0]),
        "PT5_readout": float(data[4].split(":")[1].split(",")[1]),
        "PT6_ss": int(data[5].split(":")[1].split(",")[0]),
        "PT6_readout": float(data[5].split(":")[1].split(",")[1]),
        "PT7_ss": int(data[6].split(":")[1].split(",")[0]),
        "PT7_readout": float(data[6].split(":")[1].split(",")[1]),
        "PT8_ss": int(data[7].split(":")[1].split(",")[0]),
        "PT8_readout": float(data[7].split(":")[1].split(",")[1]),
        "TC1": float(data[8].split(":")[1]),
        "TC2": float(data[9].split(":")[1]),
        "TC3": float(data[10].split(":")[1]),
        "TC4": float(data[11].split(":")[1]),
        "TC5": float(data[12].split(":")[1]),
        "TC6": float(data[13].split(":")[1]),
        "TC7": float(data[14].split(":")[1]),
        "TC8": float(data[15].split(":")[1]),
        "Alt": float(data[16].split(":")[1]),
        "xTilt": float(data[17].split(":")[1].split(",")[0]),
        "yTilt": float(data[17].split(":")[1].split(",")[1]),
        "Lat": float(data[18].split(":")[1].split(",")[0]),
        "Lon": float(data[18].split(":")[1].split(",")[1]),
        "FS": int(data[19].split(":")[1]),
        "PS_drogue": int(data[20].split(":")[1].split(",")[0]),
        "PS_main": int(data[20].split(":")[1].split(",")[1]),
        "Vel": 0
    }
    print(datastore['FS'])
    return datastore

def get_data(serial_port):
    global last_received
    
    Thread(target=receiving, args=(serial_port,)).start()
    time.sleep(5)
    data = str(last_received)[2:-1].split(';')
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
        "PS_main": data[20].split(":")[1].split(",")[1],
        "Vel": 0
    }
    return datastore

async def send_data():
    """
    Gets latest data from serial, JSON stringifies it, sends it to websocket.
    """
    global last_received
    url = "ws://localhost:8000"
    async with websockets.connect(url) as websocket:
        '''
        Collect data from serial here. Use try catch, if data is not found,
        send data with zeroed-out values.
        '''
        try:
            ser1 = serial.Serial(sys.argv[1], baudRate)
            connected = True
        except serial.serialutil.SerialException:
            connected = False
        
        if connected:
            serial_port = serial.Serial(sys.argv[1], baudRate)
            # stringified_data = json.dumps(last_received)
            stringified_data = json.dumps(get_data_old(serial_port))
            await websocket.send(stringified_data)
        else:
            empty_data = """{ "connectionStatus": 0,
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
                "FS": data,
                "PS_drogue": 0,
                "PS_main": 0,
                "Vel": 0
            }"""
            await websocket.send(empty_data)
        



print("DataReader starting. To stop, press Control+C at any time.")
time.sleep(2)
async def main():
    while True:
        await send_data()

async def test_data(url):
    async with websockets.connect(url) as websocket:
        await websocket.send(json.dumps(test_datastore))
        print("Sent data!", json.dumps(test_datastore))

if __name__ == '__main__':
    # asyncio.run(test_data("ws://localhost:8000"))
    asyncio.run(main())
