import _ from 'lodash';
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
    const later = getCustomerData().usage(customerID, laterYear, month);
    const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
    return { laterAmount: later, change: later - earlier };
}

function getCustomerData() {
    return customerData;
}
function getRawDataOfCustomers() {
    return customerData.rawData;
}
function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
}

class CustomerData {
    constructor(data) {
        this._data = data;
    }

    usage(customerID, year, month) {
        return this._data[customerID].usages[year][month];
    }

    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }

    get rawData() {
        return _.cloneDeep(this._data);
    }
}
