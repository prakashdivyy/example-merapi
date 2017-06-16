"use strict";

const Component = require("merapi/component");

module.exports = class FirstController extends Component {

    constructor(logger, firstComponent) {
        super();
        this.logger = logger;
        this.component = firstComponent;
    }

    getValue(request, response) {
        try {
            let value = this.component.getCounter();
            response.status(200);
            response.json({
                value: value
            });
            this.logger.info("execute getValue successfully");
        }
        catch (e) {
            this.logger.error("getValue error:", e);
            if (e.code) response.status(e.code);
            response.json({
                status: "error",
                error: e.message || e.toString()
            });
        }
    }

    postIncrement(request, response) {
        try {
            this.component.increment();
            response.status(200);
            response.json({
                status: "success"
            });
            this.logger.info("execute postIncrement successfully");
        }
        catch (e) {
            this.logger.error("postIncrement error:", e);
            if (e.code) response.status(e.code);
            response.json({
                status: "error",
                error: e.message || e.toString()
            });
        }
    }

    start() {
        this.logger.info("starting firstController");
    }

};