import express from "express"
import DownloadRoute from "./download/index"
import UploadRoute from "./upload/index"
import UserRoute from "./user/index"


const route = express.Router();

route.use('/upload', UploadRoute);
route.use('/download', DownloadRoute);
route.use('/user', UserRoute);

export default route;