void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(6, INPUT_PULLUP);
  pinMode(7, INPUT_PULLUP);
  pinMode(8, INPUT_PULLUP);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (digitalRead(6)==LOW) {
    Serial.println("PT1:1,123.45;PT2:1,123.45;PT3:0,123.45;PT4:0,123.45;PT5:0,123.45;PT6:0,123.45;PT7:0,123.45;PT8:0,123.45;TC1:150.00;TC2:150.00;TC3:150.00;TC4:150.00;TC5:150.00;TC6:150.00;TC7:150.00;TC8:150.00;AT:512.5;O:0.25,0.12;GPS:32.17023,-117.23745;FS:0;PS:0,0");
//      Serial.println("1");
  } else if (digitalRead(7)==LOW) {
    Serial.println("PT1:0,0;PT2:0,123.45;PT3:0,123.45;PT4:0,123.45;PT5:0,123.45;PT6:0,123.45;PT7:0,123.45;PT8:0,123.45;TC1:150.00;TC2:150.00;TC3:150.00;TC4:150.00;TC5:150.00;TC6:150.00;TC7:150.00;TC8:150.00;AT:512.5;O:0.25,0.12;GPS:32.17023,-117.23745;FS:1;PS:0,0");
//      Serial.println("2");
  } else {
    Serial.println("PT1:0,30000;PT2:0,123.45;PT3:0,123.45;PT4:0,123.45;PT5:0,123.45;PT6:0,123.45;PT7:0,123.45;PT8:0,123.45;TC1:150.00;TC2:150.00;TC3:150.00;TC4:150.00;TC5:150.00;TC6:150.00;TC7:150.00;TC8:150.00;AT:512.5;O:0.25,0.12;GPS:32.17023,-117.23745;FS:2;PS:0,0");
//      Serial.println("3");
  }
  delay(1000);
}
