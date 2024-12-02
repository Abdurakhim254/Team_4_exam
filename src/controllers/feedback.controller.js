import {statusCodes} from "../config/index.js"
import {getAllfeedBackService,getfeedBackByidService,createFeedbackService,UpdatefeedbackService,deletefeedbackService} from "../services/index.js"

const ok=statusCodes.ok
const not_found=statusCodes.not_found
const medium=statusCodes.medium
const bad=statusCodes.bad
const created=statusCodes.created


export const feedbackObj={
    getAllFedbacksCon:async function(req,res){
        try {
            const {PAGE,LIMIT}=req.query
            const result=await getAllfeedBackService()
            if(PAGE>0 || LIMIT>0){
                const data=await paginate_function(result,PAGE,LIMIT)
                return res.status(200).send(data)
            }
            return res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    }

    ,

    getFedbackByIdCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await getfeedBackByidService(id)
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    }

    ,

    CreateFedbackCon:async function(req,res){
        try {
            const {customer_id,submitted_at,feedback_type,content}=req.body
            const result=await createFeedbackService({customer_id,submitted_at,feedback_type,content})
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    }

    ,

    UpdateFedbackCon:async function(req,res){
        try {
            const {id}=req.params
            const {customer_id,submitted_at,feedback_type,content}=req.body
            const result=await UpdatefeedbackService({id,customer_id,submitted_at,feedback_type,content})
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    }

    ,

    deleteFedbackCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await deletefeedbackService(id)
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    }
}
