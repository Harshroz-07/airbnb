"use client";

import React from "react";
import { Server, Database, Globe, Search, Cpu, Layers, ShieldCheck, HardDrive, RefreshCw } from "lucide-react";

export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="py-12 border-t border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            Production-Scale Marketplace Architecture
          </h3>
          <p className="text-sm text-[#717171] mt-1">
            End-to-end system design for Airbnb-scale vacation-rental marketplace (Frontend Edge, BFF Gateway, Microservices, Geospatial Search, CockroachDB, Kafka)
          </p>
        </div>
        <a
          href="/architecture_diagram.png"
          download
          className="hidden sm:flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition"
        >
          <HardDrive className="w-3.5 h-3.5" />
          <span>Download Diagram</span>
        </a>
      </div>

      {/* SVG Diagram Card */}
      <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-2xl overflow-x-auto border border-slate-800">
        <div className="min-w-[800px] space-y-8">
          {/* Layer 1: Client & Edge Network */}
          <div>
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-3">
              <Globe className="w-4 h-4" /> 1. Client & Global Edge CDN Network (Vercel / Cloudflare)
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl text-center">
                <p className="font-semibold text-sm text-white">Next.js Web Client</p>
                <p className="text-[11px] text-slate-400 mt-1">SSR / ISR Hydration</p>
              </div>
              <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl text-center">
                <p className="font-semibold text-sm text-white">iOS & Android Apps</p>
                <p className="text-[11px] text-slate-400 mt-1">React Native / Mobile SDK</p>
              </div>
              <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl text-center">
                <p className="font-semibold text-sm text-white">Cloudflare Edge WAF</p>
                <p className="text-[11px] text-slate-400 mt-1">DDoS & BotID Defense</p>
              </div>
              <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl text-center">
                <p className="font-semibold text-sm text-white">ImageKit / Cloudinary</p>
                <p className="text-[11px] text-slate-400 mt-1">WebP Asset CDN</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <RefreshCw className="w-5 h-5 text-slate-500 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Layer 2: API Gateway & BFF */}
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4" /> 2. API Gateway & BFF Tier (GraphQL / Envoy Router)
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800/90 border border-indigo-500/30 p-4 rounded-xl">
                <p className="font-semibold text-sm text-indigo-300">GraphQL / REST BFF</p>
                <p className="text-[11px] text-slate-400 mt-1">Query Batching & Response Caching</p>
              </div>
              <div className="bg-slate-800/90 border border-indigo-500/30 p-4 rounded-xl">
                <p className="font-semibold text-sm text-indigo-300">OAuth2 & JWT Auth</p>
                <p className="text-[11px] text-slate-400 mt-1">Token Validation & Rate Limiting</p>
              </div>
              <div className="bg-slate-800/90 border border-indigo-500/30 p-4 rounded-xl">
                <p className="font-semibold text-sm text-indigo-300">Envoy Service Mesh</p>
                <p className="text-[11px] text-slate-400 mt-1">Load Balancing & mTLS Security</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <RefreshCw className="w-5 h-5 text-slate-500 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Layer 3: Backend Microservices */}
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-3">
              <Server className="w-4 h-4" /> 3. Microservices Core Engine (Kubernetes Pods)
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <p className="font-semibold text-sm text-amber-300">Listing Service</p>
                <p className="text-[11px] text-slate-400 mt-1">Property details, photos, host info</p>
              </div>
              <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <p className="font-semibold text-sm text-amber-300">Booking Engine</p>
                <p className="text-[11px] text-slate-400 mt-1">ACID Reservation & Payments</p>
              </div>
              <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <p className="font-semibold text-sm text-amber-300">Pricing & Taxes</p>
                <p className="text-[11px] text-slate-400 mt-1">Dynamic pricing & occupancy tax</p>
              </div>
              <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <p className="font-semibold text-sm text-amber-300">Availability Service</p>
                <p className="text-[11px] text-slate-400 mt-1">Calendar slots & lockout locks</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <RefreshCw className="w-5 h-5 text-slate-500 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Layer 4: Storage, Search & Event Bus */}
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
              <Database className="w-4 h-4" /> 4. Data Persistence & Geospatial Search Tier
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-slate-800/90 border border-emerald-500/30 p-4 rounded-xl">
                <p className="font-semibold text-sm text-emerald-300">OpenSearch / Elastic</p>
                <p className="text-[11px] text-slate-400 mt-1">GeoHash Spatial Map Search</p>
              </div>
              <div className="bg-slate-800/90 border border-emerald-500/30 p-4 rounded-xl">
                <p className="font-semibold text-sm text-emerald-300">CockroachDB / Postgres</p>
                <p className="text-[11px] text-slate-400 mt-1">Distributed Multi-Region ACID DB</p>
              </div>
              <div className="bg-slate-800/90 border border-emerald-500/30 p-4 rounded-xl">
                <p className="font-semibold text-sm text-emerald-300">Redis Cluster</p>
                <p className="text-[11px] text-slate-400 mt-1">Calendar & Session Cache</p>
              </div>
              <div className="bg-slate-800/90 border border-emerald-500/30 p-4 rounded-xl">
                <p className="font-semibold text-sm text-emerald-300">Apache Kafka</p>
                <p className="text-[11px] text-slate-400 mt-1">Real-time Event Streaming Bus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
