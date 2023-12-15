import { Map } from "Components/Map"
import { useLoadScript } from "@react-google-maps/api";
// import { GoogleMap } from "@react-google-maps/api";

const mapsLibraries = ["places"]

const CountyPage = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: mapsLibraries,
    });

    return (
        <div>
            {/* Top Nav */}
            <div className="flex items center bg-[#232323] px-5 py-3 gap-6 translate-y-[-100%] animate-[slideDown_0.5s_1.1s_ease_forwards]">
                {/* County select */}
                <div className="flex items-center bg-primaryBlack px-5 py-2 space-x-4 rounded-xl border border-secondaryBlack divide-x divide-[#464647] ">
                    <div className="">
                        <p className="text-xs text-white font-medium mb-2">District</p>
                        <select defaultValue={"4"} className="px-2 py-[10px] rounded-lg border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]" name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="pl-4">
                        <p className="text-xs text-white font-medium mb-2">County</p>
                        <select defaultValue={"washington"} className="px-2 py-[10px] rounded-lg border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]" name="" id="">
                            <option value="alabama">Alabama</option>
                            <option value="alaska">Alaska</option>
                            <option value="arizona">Arizona</option>
                            <option value="arkansas">Arkansas</option>
                            <option value="california">California</option>
                            <option value="colorado">Colorado</option>
                            <option value="connecticut">Connecticut</option>
                            <option value="washington">Washington</option>
                        </select>
                    </div>
                </div>
                {/* Miles */}
                <div className="flex items-center bg-primaryBlack px-5 py-2 space-x-4 rounded-xl border border-secondaryBlack divide-x divide-[#464647] ">
                    <div className="">
                        <p className="text-xs text-[#979BA6] font-medium mb-2 uppercase tracking-[1px]">Centerline Miles</p>
                        <p className="font-bold text-white text-2xl">213.7</p>
                    </div>
                    <div className="pl-4">
                        <p className="text-xs text-[#979BA6] font-medium mb-2 uppercase tracking-[1px]">County</p>
                        <p className="font-bold text-white text-2xl">492.8</p>
                    </div>
                </div>

                <div className="bg-primaryBlack px-5 py-2  rounded-xl border border-secondaryBlack">
                    <p className="text-xs text-[#979BA6] font-medium mb-2 uppercase tracking-[1px]">Route Score</p>
                    <div className="flex items-center space-x-4 divide-x divide-[#464647] ">
                        <p className="font-bold text-white text-2xl">76</p>
                        <select defaultValue={"4"} className="px-2 py-[10px] rounded-lg border border-[#4E4E4E] bg-gradient-to-t from-[#3F3F40] to-[#272727]" name="" id="">
                            <option value="1">Functional: 71</option>
                            <option value="2">Functional: 71</option>
                            <option value="3">Functional: 71</option>
                            <option value="4">Functional: 71</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Map area */}
            <div>
                {
                    isLoaded ? <Map /> : "Map Loading..."
                }
                {/* <GoogleMap zoom={10} center={{ lat: 43.45, lng: -80.49 }} mapContainerClassName="h-screen"> 5</GoogleMap> */}
            </div>
        </div>
    )
}

export default CountyPage