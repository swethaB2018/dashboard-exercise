/*

This script initiates a new DB connection in dashboard. 
Adding the custom db database under the Database Action scripts is not covered in the code.

Details of the Connection:

Email: newuser11@outlook.com
Password: Test@123
Database Name: CustomDB-1

CONFIGURATION OF WEBDRIVERIO

*** Refer the file: codecept.json ***


*/

Feature('USER AND PASSWORD BASED AUTHENTICATION');

Scenario('Create DB CONNECTION', (I) => {
  I.amOnPage('https://manage.auth0.com/login');
  //I.wait(10);
  
  //ENTER USERNAME & PASSOWRD
  I.fillField('email', 'newuser11@outlook.com');
  //I.wait(5);
  I.fillField('password', 'Test@123');
  I.wait(5);
  
  // CLICK LOG IN BUTTON
  I.click('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > button > span');
  I.wait(10);
  
  // NAVIGATE TO CONNECTIONS -> DATABASE AND CLICK CREATE NEW DB
  I.click('#sticky-wrapper > div > ul > li:nth-child(5) > a > span');
  I.click('#sticky-wrapper > div > ul > li.submenu.open > ul > li:nth-child(1) > a > span');
  I.wait(5);
  I.click('//*[@id="database-connections"]/div[1]/div[1]/a');
  I.wait(7);
  
  // ENTER THE DB NAME AND CLICK CREATE
  I.fillField('#create-database-connection-form > div:nth-child(1) > div > input', 'CustomDB-1');
  I.click('#create-database-connection-form > div:nth-child(5) > button');
  I.wait(10);
  
  // NAVIGATE TO CUSTOM DATABASE AND ENABLE "USE MY OWN DB"
  I.click('#database-connections-settings > div.content-header > ul > li:nth-child(3) > a');
  I.wait(10);
  //I.waitForElement('//*[@id="database-widget-box"]/div/div[1]/div/div/input',10);
  I.click('//*[@id="database-widget-box"]/div/div[1]/div/div/input');
  I.wait(5);
 
  // NAVIGATE TO APPLICATION AND SELECT THE DEFAULT APP
  I.click('#database-connections-plug > div.content-header > ul > li:nth-child(4) > a');
  I.wait(10);
  //I.waitForElement('//*[@id="database-connections-clients"]/div[2]/div[2]/form/div[1]/div/div/div/div/input',10);
  I.checkOption('//*[@id="database-connections-clients"]/div[2]/div[2]/form/div[1]/div/div/div/div/input');
  I.wait(7);
  
  // NAVIGATE TO TRY CONNECTIONS AND VERIFY THE CONNECTIVITY
  I.click('#database-connections-clients > div.content-header > ul > li:nth-child(5) > a');
  I.wait(7); 
  
  
  
});
