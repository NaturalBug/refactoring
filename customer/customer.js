const customerData = new CustomerData({
    1920: {
        name: 'martin',
        id: '1920',
        usages: {
            2016: {
                1: 50,
                2: 55,
                // remaining months of the year
            },
            2015: {
                1: 70,
                2: 63,
                // remaining months of the year
            },
        },
    },
    38673: {
        name: 'neal',
        id: '38673',
        // more customers in a similar form
    },
});

function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier =
        getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
}

function getCustomerData() {
    return customerData;
}
function getRawDataOfCustomers() {
    return customerData._data;
}
function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
}

class CustomerData {
    constructor(data) {
        this._data = data;
    }

    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }
}
