
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOG')
    }
};

const getBlogs = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS')
    }
};

const updateBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BLOG')
    }
};

const postBlog = ({ body }: Request, res: Response) => {
    try {
        res.send(body)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_BLOG')
    }
};

const deleteBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BLOG')
    }
};

export { getBlog, getBlogs, updateBlog, postBlog, deleteBlog };
