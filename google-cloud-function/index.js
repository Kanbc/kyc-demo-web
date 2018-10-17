const axios = require('axios');
const cors = require('cors')({ origin: true });
const CircularJSON = require('circular-json');

exports.postImage = ((req, res) => {
    cors(req, res, async () => {

        let url = 'http://35.187.230.68/ocr-idcard';
        let data = req.body;
        let config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        axios.post(url, data, config).then(function (response) {
            let json = CircularJSON.stringify(response.data);
            res.status(200).send(json);
        }).catch(function (error) {
            let json_err = CircularJSON.stringify(error);
            console.log(error);
            res.status(400).send(json_err);
        });
    });
});
