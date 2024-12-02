import { statusCodes } from "../config/index.js";
import {getUserService,getUserByEmailService,updateUserService,deleteUserService,authRegisterService} from "../services/index.js"
import {paginate_function} from "../helpers/index.js"

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const UserObj = {
  getAlluserscon: async function (req, res) {
    try {
        const result=await getUserService()
        const {PAGE,LIMIT}=req.query
        if(PAGE>0 || LIMIT>0){
            const data=await paginate_function(result,PAGE,LIMIT)
            return res.status(200).send(data)
        }
        return res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  getUserByemailcon: async function (req, res) {
    try {
    const {email}=req.params
    const result=await getUserByEmailService(email)
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  createUsercon: async function (req, res) {
    try {
      const {first_name,last_name,email,password,phone,date_of_birth,created_at,updated_at}=req.body
      const result=await authRegisterService({first_name,last_name,email,password,phone,date_of_birth,created_at,updated_at})
      res.status(ok).send(result)
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  updateUsercon: async function (req, res) {
    try {
        const {role}=req.user
        const {first_name,last_name,email,password,phone,date_of_birth,created_at,updated_at}=req.body
      const result=await updateUserService({role,first_name,last_name,email,password,phone,date_of_birth,created_at,updated_at})
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  deleteUsercon: async function (req, res) {
    try {
        const {role}=req.user
        const {email}=req.params
        const result=await deleteUserService(email,role)
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
};
