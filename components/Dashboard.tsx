"use client";

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { MoreVertical, Search, Calendar, MessageSquare, DollarSign, Home, Settings } from 'lucide-react';

const bloodPressureData = [
  { month: 'Oct 2023', systolic: 120, diastolic: 110 },
  { month: 'Nov 2023', systolic: 115, diastolic: 65 },
  { month: 'Dec 2023', systolic: 160, diastolic: 110 },
  { month: 'Jan 2024', systolic: 120, diastolic: 70 },
  { month: 'Feb 2024', systolic: 140, diastolic: 75 },
  { month: 'Mar 2024', systolic: 145, diastolic: 78 }
];

export default function Dashboard() {
  const [selectedPatient] = useState('Jessica Taylor');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Rest of the component code remains the same... */}
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold text-blue-600">Tech.Care</div>
            <nav className="flex space-x-6">
              <button className="px-3 py-2">Overview</button>
              <button className="px-3 py-2 bg-cyan-400 text-white rounded-lg">Patients</button>
              <button className="px-3 py-2">Schedule</button>
              <button className="px-3 py-2">Message</button>
              <button className="px-3 py-2">Transactions</button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img src="/api/placeholder/40/40" alt="Doctor" className="rounded-full" />
              <div className="ml-2">
                <div className="text-sm font-medium">Dr. Jose Simmons</div>
                <div className="text-xs text-gray-500">General Practitioner</div>
              </div>
            </div>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto mt-6 flex gap-6">
        {/* Left Sidebar - Patient List */}
        <div className="w-72 bg-white rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Patients</h2>
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-2">
            {['Emily Williams', 'Ryan Johnson', 'Brandon Mitchell', 'Jessica Taylor', 'Samantha Johnson'].map(name => (
              <div 
                key={name} 
                className={`p-2 rounded-lg flex items-center justify-between ${
                  name === selectedPatient ? 'bg-cyan-50' : ''
                }`}
              >
                <div className="flex items-center">
                  <img src="/api/placeholder/32/32" alt={name} className="rounded-full" />
                  <div className="ml-2">
                    <div className="text-sm font-medium">{name}</div>
                    <div className="text-xs text-gray-500">
                      {name === 'Jessica Taylor' ? 'Female, 28' : 'Patient details'}
                    </div>
                  </div>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Diagnosis History</h2>
              <select className="border rounded-lg px-3 py-1 text-sm">
                <option>Last 6 months</option>
              </select>
            </div>

            {/* Blood Pressure Chart */}
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Blood Pressure</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm">Systolic - 160</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-300 mr-2"></div>
                    <span className="text-sm">Diastolic - 78</span>
                  </div>
                </div>
              </div>

              <LineChart width={700} height={200} data={bloodPressureData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="#8B5CF6" strokeWidth={2} dot={{ fill: '#8B5CF6' }} />
                <Line type="monotone" dataKey="diastolic" stroke="#C4B5FD" strokeWidth={2} dot={{ fill: '#C4B5FD' }} />
              </LineChart>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Respiratory Rate</h3>
                <div className="text-2xl font-bold">20 bpm</div>
                <div className="text-sm text-gray-600 mt-1">Normal</div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Temperature</h3>
                <div className="text-2xl font-bold">98.6°F</div>
                <div className="text-sm text-gray-600 mt-1">Normal</div>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Heart Rate</h3>
                <div className="text-2xl font-bold">78 bpm</div>
                <div className="text-sm text-red-600 mt-1">Lower than Average</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Patient Details */}
        <div className="w-80 bg-white rounded-lg p-4">
          <div className="text-center mb-6">
            <img src="/api/placeholder/120/120" alt="Jessica Taylor" className="rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold">Jessica Taylor</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-600">Date Of Birth</div>
                <div className="text-sm font-medium">August 23, 1996</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-5 h-5 text-gray-400 mr-3">♀</div>
              <div>
                <div className="text-sm text-gray-600">Gender</div>
                <div className="text-sm font-medium">Female</div>
              </div>
            </div>

            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-600">Contact Info</div>
                <div className="text-sm font-medium">(415) 555-1234</div>
              </div>
            </div>

            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-600">Emergency Contacts</div>
                <div className="text-sm font-medium">(415) 555-5678</div>
              </div>
            </div>

            <div className="flex items-center">
              <Home className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm text-gray-600">Insurance Provider</div>
                <div className="text-sm font-medium">Sunrise Health Assurance</div>
              </div>
            </div>
          </div>

          <button className="w-full bg-cyan-400 text-white rounded-lg py-2 mt-6">
            Show All Information
          </button>
        </div>
      </div>
    </div>
  );
}