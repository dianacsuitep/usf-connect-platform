'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter } from 'recharts';
import { Search, Filter, Plus, Eye, Edit, TrendingUp, Users, DollarSign, Target, Calendar, Award, Building, Lightbulb, MessageSquare, Brain, AlertTriangle, CheckCircle, Clock, Zap, Globe, FileText, BarChart3, TrendingDown, Star, Shield, Menu, Bell, Settings, Home, Briefcase } from 'lucide-react';

const USFConnectPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [showAIInsights, setShowAIInsights] = useState(false);
  const [selectedQuarter, setSelectedQuarter] = useState('all');
  const [vettingMode, setVettingMode] = useState(false);

  // USF Brand Colors
  const usfColors = {
    gold: '#CFC493',
    darkGreen: '#006747',
    lightGreen: '#4A8B3B',
    darkGray: '#555555',
    lightGray: '#F5F5F5',
    white: '#FFFFFF'
  };

  // Sample data - Fixed and completed
  const portfolioCompanies = [
    {
      id: 1,
      name: "Alzamend Neuro",
      status: "Tier 1 - Strong Commercial Traction",
      stage: "Q7 - Preparing for Exit",
      funding: "$25M",
      valuation: "$150M",
      employees: 45,
      industry: "Biotechnology",
      description: "Leading Alzheimer's therapy development with AL001 lithium-salicylate compound",
      kpis: { revenue: 85, milestones: 90, team: 80, market: 95, ip: 88, partnerships: 92 },
      nextMilestone: "Phase III Trial Results",
      riskLevel: "Low",
      competitorAnalysis: "Strong competitive positioning with novel lithium-salicylate platform. FDA breakthrough therapy designation provides regulatory advantage.",
      timeline: "2024 Q3"
    },
    {
      id: 2,
      name: "DataGen Technologies",
      status: "Tier 2 - Scaling Operations",
      stage: "Q5 - Growth Phase",
      funding: "$8M",
      valuation: "$45M",
      employees: 28,
      industry: "Data Analytics",
      description: "AI-powered data generation platform for enterprise machine learning",
      kpis: { revenue: 75, milestones: 70, team: 85, market: 80, ip: 75, partnerships: 60 },
      nextMilestone: "Series B Funding",
      riskLevel: "Medium",
      competitorAnalysis: "Competitive market but strong technical differentiation. Need to expand sales team.",
      timeline: "2024 Q4"
    },
    {
      id: 3,
      name: "GreenTech Solutions",
      status: "Tier 3 - Early Development",
      stage: "Q2 - Product Development",
      funding: "$2M",
      valuation: "$12M",
      employees: 15,
      industry: "Clean Technology",
      description: "Sustainable energy storage solutions for residential applications",
      kpis: { revenue: 45, milestones: 55, team: 70, market: 65, ip: 80, partnerships: 40 },
      nextMilestone: "Prototype Testing",
      riskLevel: "High",
      competitorAnalysis: "Early stage with promising technology. Market timing uncertain, needs strategic partnerships.",
      timeline: "2024 Q2"
    }
  ];

  // Chart data
  const monthlyData = [
    { month: 'Jan', funding: 12, companies: 18, deals: 5 },
    { month: 'Feb', funding: 19, companies: 22, deals: 8 },
    { month: 'Mar', funding: 15, companies: 25, deals: 6 },
    { month: 'Apr', funding: 28, companies: 28, deals: 12 },
    { month: 'May', funding: 22, companies: 32, deals: 9 },
    { month: 'Jun', funding: 35, companies: 35, deals: 15 }
  ];

  const riskData = [
    { name: 'Low Risk', value: 45, fill: '#10B981' },
    { name: 'Medium Risk', value: 35, fill: '#F59E0B' },
    { name: 'High Risk', value: 20, fill: '#EF4444' }
  ];

  // Company Card Component - Fixed JSX syntax
  const CompanyCard = ({ company }: { company: any }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{company.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{company.industry}</p>
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
            company.status.includes('Tier 1') ? 'bg-green-100 text-green-800 border border-green-200' :
            company.status.includes('Tier 2') ? 'bg-blue-100 text-blue-800 border border-blue-200' :
            'bg-orange-100 text-orange-800 border border-orange-200'
          }`}>
            {company.status}
          </span>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold" style={{color: usfColors.darkGreen}}>{company.funding}</p>
          <p className="text-xs text-gray-500">{company.employees} employees</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4 line-clamp-2">{company.description}</p>

      <div className="space-y-2 mb-4">
        {Object.entries(company.kpis).map(([key, value]) => {
          const numValue = Number(value);
          return (
            <div key={key} className="flex items-center space-x-2">
              <span className="text-xs font-medium text-gray-600 w-20 capitalize">{key}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${numValue >= 80 ? 'bg-green-500' : numValue >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${numValue}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">{numValue}%</span>
            </div>
          );
        })}
      </div>

      <div className="bg-purple-50 p-3 rounded-lg mb-4 border border-purple-100">
        <div className="flex items-center space-x-2 mb-2">
          <Brain className="h-4 w-4 text-purple-600" />
          <span className="text-xs font-medium text-purple-800">AI Insights</span>
        </div>
        <p className="text-xs text-purple-700">{company.competitorAnalysis}</p>
        <p className="text-xs text-purple-600 mt-1">Timeline: {company.timeline}</p>
      </div>
      
      <div className="flex justify-between items-center">
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
          company.riskLevel === 'Low' ? 'bg-green-100 text-green-800 border border-green-200' :
          company.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
          'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {company.riskLevel} Risk
        </span>
        <button 
          onClick={() => setSelectedCompany(company)}
          className="text-sm font-medium transition-colors duration-200 px-3 py-1 rounded hover:bg-gray-100"
          style={{color: usfColors.darkGreen}}
        >
          View Details →
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {/* USF Logo */}
                <div className="flex items-center space-x-3" style={{backgroundColor: usfColors.darkGreen, padding: '8px 16px', borderRadius: '8px'}}>
                  <svg width="40" height="32" viewBox="0 0 100 80" className="text-white">
                    <path d="M20 15 C20 15, 25 10, 35 15 C45 20, 50 25, 45 35 C40 45, 35 50, 25 45 C15 40, 10 35, 15 25 C20 15, 20 15, 20 15 Z" 
                          fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                    <path d="M25 20 C30 18, 35 20, 40 25 C42 30, 40 35, 35 38 C30 40, 25 38, 22 33 C20 28, 22 23, 25 20 Z" 
                          fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M65 15 C65 15, 70 10, 80 15 C90 20, 95 25, 90 35 C85 45, 80 50, 70 45 C60 40, 55 35, 60 25 C65 15, 65 15, 65 15 Z" 
                          fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <div className="text-white font-bold text-lg">USF CONNECT</div>
                    <div className="text-white text-xs opacity-90">Innovation & Economic Development</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">AI-Powered Platform</div>
                <div className="text-sm text-gray-500">210 Portfolio Companies • 450M+ Funding</div>
              </div>
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                <Settings className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md" style={{backgroundColor: usfColors.darkGreen}}>
                  U
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { key: 'dashboard', label: 'AI Dashboard', icon: BarChart3, description: 'Real-time Analytics' },
              { key: 'portfolio', label: 'Smart Portfolio', icon: Briefcase, description: 'Company Management' },
              { key: 'evolve', label: 'Evolve AI', icon: Target, description: 'Accelerator Program' },
              { key: 'tto', label: 'TTO Intelligence', icon: FileText, description: 'Tech Transfer' },
              { key: 'innofuse', label: 'InnoFuse Hub', icon: Users, description: 'Summit Platform' }
            ].map(({ key, label, icon: Icon, description }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-4 py-4 text-sm font-medium border-b-3 transition-all duration-200 group ${
                  activeTab === key
                    ? 'border-yellow-400 text-gray-900 bg-yellow-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
                style={activeTab === key ? {borderBottomColor: usfColors.gold} : {}}
              >
                <Icon className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div>{label}</div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-500">{description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Key Metrics - Optimized 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg" style={{backgroundColor: `${usfColors.darkGreen}15`}}>
                      <DollarSign className="h-5 w-5" style={{color: usfColors.darkGreen}} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Funding</p>
                      <p className="text-xl font-bold" style={{color: usfColors.darkGreen}}>$450M</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-600 font-medium">+15%</p>
                    <p className="text-xs text-gray-400">this quarter</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-blue-100">
                      <Building className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Portfolio Companies</p>
                      <p className="text-xl font-bold text-blue-600">210</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-blue-600 font-medium">+8</p>
                    <p className="text-xs text-gray-400">new this month</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-purple-100">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">AI Accuracy</p>
                      <p className="text-xl font-bold text-purple-600">89%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-purple-600 font-medium">+3%</p>
                    <p className="text-xs text-gray-400">prediction rate</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-yellow-100">
                      <Zap className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Efficiency</p>
                      <p className="text-xl font-bold text-yellow-600">300%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-yellow-600 font-medium">+200%</p>
                    <p className="text-xs text-gray-400">improvement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights Panel */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-lg border border-purple-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">AI-Powered Intelligence</h3>
                </div>
                <button 
                  onClick={() => setShowAIInsights(!showAIInsights)}
                  className="text-purple-600 hover:text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors duration-200 text-sm font-medium"
                >
                  {showAIInsights ? 'Hide' : 'Show'} Details
                </button>
              </div>

              {showAIInsights && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-700 mb-2">High Potential Companies</h4>
                      <p className="text-2xl font-bold text-green-600">12</p>
                      <p className="text-xs text-gray-600">Likely to succeed</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-medium text-yellow-700 mb-2">Medium Risk</h4>
                      <p className="text-2xl font-bold text-yellow-600">28</p>
                      <p className="text-xs text-gray-600">Need monitoring</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-medium text-red-700 mb-2">Need Support</h4>
                      <p className="text-2xl font-bold text-red-600">25</p>
                      <p className="text-xs text-gray-600">Require intervention</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Real-time Alerts */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Real-time Intelligence Alerts</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-500">Live</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900">Alzamend Neuro - Milestone Achievement</p>
                      <p className="text-sm text-green-700">Phase III trial enrollment completed ahead of schedule</p>
                      <p className="text-xs text-green-600 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">High Impact</span>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Funding Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="funding" stroke={usfColors.darkGreen} strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={riskData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Smart Portfolio Management</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search companies..." 
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <select 
                  value={selectedQuarter}
                  onChange={(e) => setSelectedQuarter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Quarters</option>
                  <option value="q1">Q1 2024</option>
                  <option value="q2">Q2 2024</option>
                  <option value="q3">Q3 2024</option>
                  <option value="q4">Q4 2024</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {portfolioCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'innofuse' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">InnoFuse Summit Analytics</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Summit Impact Metrics</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">$2.1M</p>
                  <p className="text-sm text-gray-600 mt-1">Investment Generated</p>
                  <p className="text-xs text-green-600 mt-1">Direct ROI</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">42</p>
                  <p className="text-sm text-gray-600 mt-1">New Partnerships</p>
                  <p className="text-xs text-blue-600 mt-1">Industry + Academia</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">78%</p>
                  <p className="text-sm text-gray-600 mt-1">Follow-up Rate</p>
                  <p className="text-xs text-purple-600 mt-1">Post-summit engagement</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold" style={{color: usfColors.gold}}>25</p>
                  <p className="text-sm text-gray-600 mt-1">Technologies Licensed</p>
                  <p className="text-xs" style={{color: usfColors.gold}}>From USF portfolio</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'evolve' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">AI-Powered Evolve Program</h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="2024">Cohort 2024</option>
                  <option value="2023">Cohort 2023</option>
                </select>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Add Participant
                </button>
              </div>
            </div>

            {/* Program Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active Participants</p>
                    <p className="text-2xl font-bold text-blue-600">24</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Milestones Hit</p>
                    <p className="text-2xl font-bold text-green-600">156</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Funding Raised</p>
                    <p className="text-2xl font-bold text-purple-600">$18M</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Target className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="text-2xl font-bold text-yellow-600">78%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Participant Progress */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Participant Progress Tracking</h3>
              <div className="space-y-4">
                {[
                  { name: "MedTech Innovations", quarter: "Q3", progress: 85, nextMilestone: "Clinical Trial Approval", risk: "Low" },
                  { name: "CleanEnergy Solutions", quarter: "Q2", progress: 62, nextMilestone: "Prototype Testing", risk: "Medium" },
                  { name: "AI Diagnostics", quarter: "Q4", progress: 91, nextMilestone: "Series A Funding", risk: "Low" },
                  { name: "BioMaterials Inc", quarter: "Q1", progress: 45, nextMilestone: "Market Validation", risk: "High" }
                ].map((participant, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{participant.name}</h4>
                        <p className="text-sm text-gray-600">{participant.quarter} • Next: {participant.nextMilestone}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          participant.risk === 'Low' ? 'bg-green-100 text-green-800' :
                          participant.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {participant.risk} Risk
                        </span>
                        <span className="text-sm font-medium text-gray-900">{participant.progress}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${participant.progress >= 80 ? 'bg-green-500' : participant.progress >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${participant.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Predictions */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-lg border border-purple-100">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">AI Success Predictions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Likely to Graduate</p>
                  <p className="text-2xl font-bold text-green-600">18</p>
                  <p className="text-xs text-green-600">Based on current trajectory</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Need Support</p>
                  <p className="text-2xl font-bold text-yellow-600">4</p>
                  <p className="text-xs text-yellow-600">Require intervention</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">At Risk</p>
                  <p className="text-2xl font-bold text-red-600">2</p>
                  <p className="text-xs text-red-600">Immediate attention needed</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tto' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Technology Transfer Intelligence</h2>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Export Report
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  New Disclosure
                </button>
              </div>
            </div>

            {/* TTO Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active Patents</p>
                    <p className="text-2xl font-bold text-blue-600">127</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Licensed Tech</p>
                    <p className="text-2xl font-bold text-green-600">43</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Licensing Revenue</p>
                    <p className="text-2xl font-bold text-purple-600">$8.2M</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">New Disclosures</p>
                    <p className="text-2xl font-bold text-yellow-600">32</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Pipeline */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technology Transfer Pipeline</h3>
              <div className="space-y-4">
                {[
                  { 
                    title: "Novel Cancer Therapy Platform", 
                    inventor: "Dr. Sarah Chen, College of Medicine", 
                    stage: "Patent Filed", 
                    marketPotential: "High", 
                    industry: "Biotechnology",
                    trl: 4,
                    licensingStatus: "Available"
                  },
                  { 
                    title: "Advanced Battery Management System", 
                    inventor: "Dr. Michael Rodriguez, Engineering", 
                    stage: "Patent Pending", 
                    marketPotential: "Very High", 
                    industry: "Clean Energy",
                    trl: 6,
                    licensingStatus: "In Negotiation"
                  },
                  { 
                    title: "AI-Powered Drug Discovery Algorithm", 
                    inventor: "Dr. Jennifer Liu, Computer Science", 
                    stage: "Disclosure Review", 
                    marketPotential: "High", 
                    industry: "Artificial Intelligence",
                    trl: 3,
                    licensingStatus: "Available"
                  },
                  { 
                    title: "Smart Materials for Construction", 
                    inventor: "Dr. Robert Johnson, Materials Science", 
                    stage: "Licensed", 
                    marketPotential: "Medium", 
                    industry: "Construction",
                    trl: 7,
                    licensingStatus: "Licensed"
                  }
                ].map((tech, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{tech.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{tech.inventor}</p>
                        <div className="flex items-center space-x-4 text-xs">
                          <span className="text-gray-500">Industry: {tech.industry}</span>
                          <span className="text-gray-500">TRL: {tech.trl}/9</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          tech.licensingStatus === 'Licensed' ? 'bg-green-100 text-green-800' :
                          tech.licensingStatus === 'In Negotiation' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {tech.licensingStatus}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          tech.marketPotential === 'Very High' ? 'bg-purple-100 text-purple-800' :
                          tech.marketPotential === 'High' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {tech.marketPotential} Potential
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{tech.stage}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 bg-blue-500 rounded-full" 
                            style={{ width: `${(tech.trl / 9) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">TRL {tech.trl}/9</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry Focus Areas</h3>
                <div className="space-y-3">
                  {[
                    { industry: "Biotechnology", count: 34, percentage: 35 },
                    { industry: "Clean Energy", count: 28, percentage: 29 },
                    { industry: "AI/Machine Learning", count: 22, percentage: 23 },
                    { industry: "Materials Science", count: 13, percentage: 13 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium text-gray-700">{item.industry}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 bg-blue-500 rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 w-8">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Licensing Opportunities</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">High Priority</span>
                    </div>
                    <p className="text-xs text-green-700">12 technologies ready for immediate licensing</p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-800">Under Review</span>
                    </div>
                    <p className="text-xs text-yellow-700">8 technologies in patent review process</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Lightbulb className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Early Stage</span>
                    </div>
                    <p className="text-xs text-blue-700">15 new disclosures requiring evaluation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default USFConnectPlatform;