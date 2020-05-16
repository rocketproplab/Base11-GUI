import asyncio
import websockets
import serial
import json
import time

last_received = ''

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

def parsed_data(data):
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
        collect data from serial here. Use try catch, if data is not found,
        send data with zeroed-out values.
        '''
        try:
            stringified_data = json.dumps(last_received)
            await websocket.send(stringified_data)
        except:
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
        




while True:
    asyncio.get_event_loop().run_until_complete(send_data())
