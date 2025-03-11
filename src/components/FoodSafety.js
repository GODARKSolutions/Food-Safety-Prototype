import React from 'react';

const FoodSafety = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Food Safety Prototype</h1>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Temperature Monitoring</h2>
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                        <div className="w-40 text-gray-700">Refrigerator:</div>
                        <div className="px-3 py-1 bg-green-100 text-green-800 rounded">38°F (Safe)</div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-40 text-gray-700">Freezer:</div>
                        <div className="px-3 py-1 bg-green-100 text-green-800 rounded">0°F (Safe)</div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-40 text-gray-700">Hot Holding:</div>
                        <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded">135°F (Warning)</div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Expiration Tracking</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="py-2 px-4 text-left">Item</th>
                                <th className="py-2 px-4 text-left">Location</th>
                                <th className="py-2 px-4 text-left">Expiration</th>
                                <th className="py-2 px-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            <tr className="border-b">
                                <td className="py-2 px-4">Ground Beef</td>
                                <td className="py-2 px-4">Walk-in Cooler</td>
                                <td className="py-2 px-4">Today</td>
                                <td className="py-2 px-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Expires Today</span></td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4">Diced Tomatoes</td>
                                <td className="py-2 px-4">Dry Storage</td>
                                <td className="py-2 px-4">Mar 15, 2025</td>
                                <td className="py-2 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Good</span></td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4">Chicken Breast</td>
                                <td className="py-2 px-4">Freezer</td>
                                <td className="py-2 px-4">Mar 13, 2025</td>
                                <td className="py-2 px-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">2 Days Left</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">HACCP Checklist</h2>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" id="check1" />
                        <label htmlFor="check1" className="ml-2 text-gray-700">Equipment temperature verification completed</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" id="check2" />
                        <label htmlFor="check2" className="ml-2 text-gray-700">Food storage areas inspected</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" id="check3" />
                        <label htmlFor="check3" className="ml-2 text-gray-700">Hand washing stations stocked and functional</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" id="check4" />
                        <label htmlFor="check4" className="ml-2 text-gray-700">Cross-contamination prevention measures in place</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodSafety; 