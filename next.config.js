// const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
    // if (phase === PHASE_DEVELOPMENT_SERVER) {
    //     return {
    //         env: {
    //             mongodb_username: 'mishka',
    //             mongodb_password: '1994-455',
    //             mongodb_cluster: 'cluster0',
    //             mongodb_database: 'MusBlog'
    //         }
    //     }
    // }
    return {
        env: {
            mongodb_username: 'mishka',
            mongodb_password: '1994-455',
            mongodb_cluster: 'cluster0',
            mongodb_database: 'MusBlog'
        }
    }
}