module.exports = (sequelize, DataTypes) => {
    const Ad = sequelize.define('Ad', {
        manufacturer: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        productionYear: {
            type: DataTypes.INTEGER
        },
        color: {
            type: DataTypes.STRING
        },
        kW: {
            type: DataTypes.INTEGER
        },
        cm3: {
            type: DataTypes.INTEGER
        },
        kilometers: {
            type: DataTypes.INTEGER
        },
        adOwner: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        contactNumber: {
            type: DataTypes.STRING
        }
    })

    return Ad
}