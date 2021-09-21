/*create reviewer */
/* can't use ES6 export syntax due to incompatibility with sequelize */
module.exports = (sequelize, DataTypes) => {
    /* create the model corresponding to the restaurant PostgreSQL table */
    const Reviewer = sequelize.define("reviewer", {
        /* sequelize automatically defines an id column as primary key */
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    });

    return Reviewer;
}
