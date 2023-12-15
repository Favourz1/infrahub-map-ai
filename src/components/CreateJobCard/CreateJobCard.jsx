import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify"
import { PLANS_DATA } from "Data"


const CreateJobCard = ({ setSidebar, setTableData }) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const schema = yup.object().shape({
        category: yup.string().trim().required("Category is required"),
        planDate: yup.string().trim().required("Plan Date is required"),
        jobType: yup.string().trim().required("Job Type is required"),
        route: yup.string().trim().required("Route is required"),
        startMilepost: yup.string().trim().required("Start Milepost is required"),
        endMilepost: yup.string().trim().required("End Milepost is required"),
        startDesc: yup.string().trim().required("Start Description is required"),
        endDesc: yup.string().trim().required("End Description is required"),
        budgetType: yup.string().trim().required("Budget Type is required"),
        treatment: yup.string().trim().required("Treatment is required"),
    });


    const methods = useForm({
        resolver: yupResolver(schema)
    });

    const { handleSubmit, register, formState, reset } = methods;

    function onSubmit(data) {
        setIsUpdating(true)
        try {
            console.log(data)
            setTableData((prev) => [...prev, {
                route: data.route,
                status: "Not Started",
                planned_date: data.planDate,
                treatment: data.treatment,
                estimated_cost: data.budgetType,
                owner: "Favour Okoh",
            }])
            console.log("PLANS DATA", PLANS_DATA)

            toast.success("Plan Added");
            reset()
            setSidebar(false);
        } catch (error) {
            console.log(error)
        }
        setIsUpdating(false)
    }

    return (
        <div>
            {/* Header */}
            <div
                className={`sticky top-0 bg-[#232323] flex items-center justify-between gap-4 border-b border-b-[#464647] p-3`}
            >
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold">Create Job</span>
                    <span className="flex items-center text-primaryBlue text-sm gap-1 font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.4923 17.4922C14.3331 17.4922 15.8256 15.9997 15.8256 14.1588V11.6588C15.8256 11.1988 15.4523 10.8255 14.9923 10.8255C14.5323 10.8255 14.159 11.1988 14.159 11.6588V14.1588C14.159 15.0797 13.4131 15.8255 12.4923 15.8255H5.82564C4.90481 15.8255 4.15897 15.0797 4.15897 14.1588V7.49218C4.15897 6.57135 4.90481 5.82552 5.82564 5.82552H8.32564C8.78564 5.82552 9.15897 5.45219 9.15897 4.99219C9.15897 4.53219 8.78564 4.15885 8.32564 4.15885H5.82564C3.98481 4.15885 2.49231 5.65135 2.49231 7.49218V14.1588C2.49231 15.9997 3.98481 17.4922 5.82564 17.4922H12.4923ZM9.15897 11.6588C9.3723 11.6588 9.5948 11.5872 9.75813 11.4247L15.8256 5.35636V8.32552H17.4923V3.32552C17.4923 2.86552 17.119 2.49219 16.659 2.49219H11.659V4.15885H14.6273L8.55981 10.2264C8.23481 10.5522 8.23481 11.0988 8.55981 11.4247C8.72314 11.5872 8.94564 11.6588 9.15897 11.6588Z" fill="#3888FF" />
                    </svg>
                        Go to map
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="flex items-center rounded-md border border-[#464647] px-3 py-2 shadow-sm"
                        onClick={() => setSidebar(false)}
                        type="reset"
                        form="createJobForm"
                    >
                        Cancel
                    </button>
                    <button
                        className="flex items-center rounded-md bg-primaryBlue px-3 py-2 text-white shadow-sm"
                        disabled={isUpdating}
                        type="submit"
                        form="createJobForm"
                    >
                        {isUpdating ? "Creating..." : "Create"}
                    </button>
                </div>
            </div>

            <form className="min-w-full" id="createJobForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-between my-2 gap-3">
                    <div className="w-1/2">
                        <p className="text-xs text-left text-white font-medium mb-2">Choose Category</p>
                        <select defaultValue={"backlog"} {...register("category")} className="w-full px-2 py-[10px] rounded-lg border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]" name="" id="">
                            <option value="backlog">Backlog</option>
                            <option value="maintenance_plan">Maintenance Plan</option>
                        </select>
                        {formState?.errors?.category &&
                            <span className="text-red-500 text-sm">
                                {formState?.errors?.category.message}
                            </span>}
                    </div>
                    <div className="w-1/2">
                        <p className="text-xs text-left text-white font-medium mb-2">Plan Date</p>
                        <input {...register("planDate")} className="w-full px-2 py-[10px] rounded-lg border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]" type="date" name="planDate" />
                        {formState?.errors?.planDate &&
                            <span className="text-red-500 text-sm">
                                {formState?.errors?.planDate.message}
                            </span>}
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="w-[10%]">test</div>
                    <div className="max-w-[90%] space-y-4">
                        <div>
                            <p className="text-left text-xl text-white font-medium mb-2">Job Type</p>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center gap-2">
                                    <input {...register("jobType")} type="radio" value="pavement" />
                                    <span className="font-medium text-sm text-[#979BA6]">Pavement</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input {...register("jobType")} type="radio" value="roadside_assets" />
                                    <span className="font-medium text-sm text-[#979BA6]">Roadside Assets</span>
                                </div>
                            </div>
                            {formState?.errors?.jobType &&
                                <span className="text-red-500 text-sm">
                                    {formState?.errors?.jobType.message}
                                </span>}
                        </div>
                        <p className="text-left text-xl text-white font-medium mb-2">Route Details</p>
                        <div>
                            <div className="flex flex-col">
                                <label className="text-xs text-left text-white font-medium mb-2">Route <span className="text-base text-red-400 font-semibold">*</span></label>
                                <input {...register("route")} className="px-3 py-2 caret-white rounded-lg border border-[#464647] focus:shadow-none " type="text" />
                                {formState?.errors?.route &&
                                    <span className="text-red-500 text-sm">
                                        {formState?.errors?.route.message}
                                    </span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 gap-y-3">
                            <div className="flex flex-col">
                                <label className="text-xs text-left text-white font-medium mb-2">Starting Milepost <span className="text-base text-red-400 font-semibold">*</span></label>
                                <input {...register("startMilepost")} className="px-3 py-2 caret-white rounded-lg border border-[#464647] focus:shadow-none " type="text" />
                                {formState?.errors?.startMilepost &&
                                    <span className="text-red-500 text-sm">
                                        {formState?.errors?.startMilepost.message}
                                    </span>}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs text-left text-white font-medium mb-2">Ending Milepost <span className="text-base text-red-400 font-semibold">*</span></label>
                                <input {...register("endMilepost")} className="px-3 py-2 caret-white rounded-lg border border-[#464647] focus:shadow-none " type="text" />
                                {formState?.errors?.endMilepost &&
                                    <span className="text-red-500 text-sm">
                                        {formState?.errors?.endMilepost.message}
                                    </span>}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs text-left text-white font-medium mb-2">Start Description<span className="text-base text-red-400 font-semibold">*</span></label>
                                <input {...register("startDesc")} className="px-3 py-2 caret-white rounded-lg border border-[#464647] focus:shadow-none " type="text" />
                                {formState?.errors?.startDesc &&
                                    <span className="text-red-500 text-sm">
                                        {formState?.errors?.startDesc.message}
                                    </span>}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs text-left text-white font-medium mb-2">End Description<span className="text-base text-red-400 font-semibold">*</span></label>
                                <input {...register("endDesc")} className="px-3 py-2 caret-white rounded-lg border border-[#464647] focus:shadow-none " type="text" />
                                {formState?.errors?.endDesc &&
                                    <span className="text-red-500 text-sm">
                                        {formState?.errors?.endDesc.message}
                                    </span>}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <input {...register("hasEntireRoute")} className="rounded-lg h-4 w-4 accent-primaryBlue" type="checkbox" />
                            <p className="text-xs">Select entire route</p>
                        </div>

                        <p className="text-left text-xl text-white font-medium mb-2">Route Details</p>

                        <div className="w-full">
                            <p className="text-xs text-left text-white font-medium mb-2">Budget Type</p>
                            <select defaultValue={"resurfacing"} {...register("budgetType")} className="w-full px-2 py-[10px] rounded-lg border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]" name="" id="">
                                <option value="resurfacing">Resurfacing</option>
                                <option value="flexible">Flexible</option>
                            </select>
                            {formState?.errors?.budgetType &&
                                <span className="text-red-500 text-sm">
                                    {formState?.errors?.budgetType.message}
                                </span>}
                        </div>
                        <div className="w-full">
                            <p className="text-xs text-left text-white font-medium mb-2">Treatment</p>
                            <select defaultValue={'1.5" $9.5B'} {...register("treatment")} className="w-full px-2 py-[10px] rounded-lg border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]" name="" id="">
                                <option value='1.5" $9.5B'>1.5&quot; $9.5B</option>
                                <option value='2" $10B'>2&quot; $10B</option>
                            </select>
                            {formState?.errors?.treatment &&
                                <span className="text-red-500 text-sm">
                                    {formState?.errors?.treatment.message}
                                </span>}
                        </div>

                    </div>
                </div>
            </form>
        </div >
    )
}

export default CreateJobCard