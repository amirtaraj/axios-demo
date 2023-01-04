const axios = require('axios');
const { expect } = require('chai');
const envVariables = require('./env.json');
const fs = require('fs');
const faker=require('faker');

describe("Dummy Test", async () => {
    it("Get Employees -GET", async () => {
        const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        expect(response.status).equals(200);
    })


       it("Add Employee -POST", async () => {
        const response = await axios.post(`${envVariables.baseUrl}/api/v1/create`,
            {
                "name": "test",
                "salary": "123",
                "age":"23"
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then(function (res) { return res.data })
        console.log(response);
        envVariables.token = response.token;
        fs.writeFileSync('./env.json', JSON.stringify(envVariables));

    })

    it("Edit Employee - PUT", async () => {
        const response = await axios.post(`${envVariables.baseUrl}/api/v1/update/1375`,
            {
                "name": "test1",
                "salary": "1123",
                "age":"23"
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then(function (res) { return res.data })
        console.log(response);
        envVariables.token = response.token;
        fs.writeFileSync('./env.json', JSON.stringify(envVariables));

    })

    // it("User Login", async () => {
    //     const response = await axios.post(`${envVariables.baseUrl}/customer/api/v1/login`,
    //         {
    //             "username": "salman",
    //             "password": "salman1234"
    //         },
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         }
    //     ).then(function (res) { return res.data })
    //     console.log(response);
    //     envVariables.token = response.token;
    //     fs.writeFileSync('./env.json', JSON.stringify(envVariables));

    // })
    // it("Customer List", async () => {
    //     const response = await axios.get(`${envVariables.baseUrl}/customer/api/v1/list`,
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': envVariables.token
    //             }
    //         }
    //     ).then(res => res.data)
    //     console.log(response);

    // })
    // it("Get Customer Info", async () => {
    //     const response = await axios.get(`${envVariables.baseUrl}/customer/api/v1/get/101`,
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': envVariables.token
    //             }
    //         }
    //     ).then(res => res.data)
    //     console.log(response);
    //     expect(response.id).equals(101)

    // })

    // // before.skip("Generate Fake Info", async () => {
    // //     const response = await axios.get(`https://api.namefake.com/english-united-states`,
    // //         {
    // //             headers: {
    // //                 'Content-Type': 'application/json',
    // //             }
    // //         }
    // //     ).then(res => res.data)
    // //     envVariables.id = Math.floor((Math.random() * (9999 - 1001)) + 1);
    // //     envVariables.name = response.name;
    // //     envVariables.email = `${response.email_u}@test.com`;
    // //     envVariables.address = response.address;
    // //     envVariables.phone_number = response.phone_w;
    // //     fs.writeFileSync('./env.json', JSON.stringify(envVariables));

    // // })
    // it("Signup User", async () => {
    //     const response = await axios.post(`${envVariables.baseUrl}/customer/api/v1/create`,
    //         {
    //             "id": Math.floor((Math.random() * (9999 - 1001)) + 1),
    //             "name": faker.name.firstName(),
    //             "email": faker.internet.email(),
    //             "address": faker.address.streetAddress(),
    //             "phone_number": faker.phone.phoneNumber()
    //         },
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': envVariables.token
    //             }
    //         }
    //     ).then(res => res.data)
    //     console.log(response);
    //     expect(response.message).contains("Success");

    //     envVariables.id = response.Customers.id;
    //     envVariables.name = response.Customers.name;
    //     envVariables.email = response.Customers.email;
    //     envVariables.address = response.Customers.address;
    //     envVariables.phone_number = response.Customers.phone_number;
    //     fs.writeFileSync('./env.json', JSON.stringify(envVariables));

    // })
    // it("Update Customer", async () => {
    //     const response = await axios.put(`${envVariables.baseUrl}/customer/api/v1/update/${envVariables.id}`,
    //         {
    //             "id": envVariables.id,
    //             "name": envVariables.name,
    //             "email": envVariables.email,
    //             "address": "Dhaka,Bangladesh",
    //             "phone_number": "01602212410"
    //         },
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': envVariables.token
    //             }
    //         }
    //     ).then(res => res.data)
    //     console.log(response);
    //     expect(response.message).contains("Success");

    // })
    // it("Delete Customer", async () => {
    //     const response = await axios.delete(`${envVariables.baseUrl}/customer/api/v1/delete/${envVariables.id}`,
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': envVariables.token
    //             }
    //         }
    //     ).then(res => res.data)
    //     console.log(response);
    //     expect(response.message).contains("Customer deleted!");

    // })
})