import asyncio
import websockets
import serial

async def send_data():
    """
    Gets latest data from serial, JSON stringifies it, sends it to websocket.
    """
    url = "ws://localhost:8000"
    async with websockets.connect(url) as websocket:
        '''
        collect data from serial here. Use try catch, if data is not found,
        send data with zeroed-out values.
        '''
        await websocket.send(data)




while True:
    asyncio.get_event_loop().run_until_complete(send_data())
