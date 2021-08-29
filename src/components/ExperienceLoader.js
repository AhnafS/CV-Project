import React from 'react';

function ExperienceLoader(props){
    return(
        <div>
            {props.experience.map(experience => {
                return (
                  <div className="flex mb-5">
                    <div className="flex flex-col space-y-3 w-3/4">
                      <input
                        type="text"
                        placeholder="Enter Company Name"
                        className="p-1.5 bg-transparent rounded-sm focus:bg-gray-50"
                        value={experience.company}
                      />
                      <input
                        type="text"
                        placeholder="Enter Compnay Position"
                        className="p-1.5 bg-transparent rounded-sm focus:bg-gray-50"
                        value={experience.position}
                      />
                      <input
                        type="text"
                        placeholder="Enter Company Discription"
                        className="p-1.5 bg-transparent rounded-sm focus:bg-gray-50"
                        value={experience.desc}
                      />
                    </div>
                    <div className="flex flex-col w-1/6">
                      <label>Start Date: </label>
                      <input
                        type="date"
                        className="p-1 bg-transparent focus:bg-gray-50"
                        value={experience.startDate}
                      />

                      <label className="mt-2">End Date: </label>
                      <input
                        type="date"
                        className="p-1 bg-transparent focus:bg-gray-50"
                        value={experience.endDate}
                      />
                    </div>
                  </div>
                );
            })}
        </div>
    )
}

export default ExperienceLoader;