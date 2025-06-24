import express from "express"
import v1route from './v1/index'

const route = express.Router();

route.use('/v1', v1route)

export default route;


