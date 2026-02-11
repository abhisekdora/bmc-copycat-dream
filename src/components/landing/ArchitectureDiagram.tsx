import { Monitor, Server, Cloud, Zap, Search, Database, Lock, BarChart3, Users, ArrowRight, ArrowDown, Settings } from "lucide-react";

const ArchitectureDiagram = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] p-6 space-y-6">
        
        {/* Top Row: Portal | SmartFlow Core | RDI */}
        <div className="grid grid-cols-12 gap-4 items-start">
          
          {/* Left Column - Portal */}
          <div className="col-span-3 space-y-3">
            <div className="border-2 border-border rounded-xl p-4 bg-card">
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="w-5 h-5 text-teal-600" />
                <h3 className="font-bold text-foreground text-sm">RDT-SmartFlow Portal</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Standardized services to display and access Pegasus and app-provided screens
              </p>
              <div className="space-y-2">
                <div className="border border-border/60 rounded-lg p-2 bg-background/50">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BarChart3 className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-foreground">Case Management Screen</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8 h-4 rounded-sm bg-primary/20" />
                    <div className="w-8 h-4 rounded-sm bg-teal-500/20" />
                    <div className="w-8 h-4 rounded-sm bg-orange-500/20" />
                  </div>
                </div>
                <div className="border border-border/60 rounded-lg p-2 bg-background/50">
                  <div className="flex items-center gap-1.5">
                    <Settings className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-foreground">Task Management Screen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Users */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span>Case/Request Managers & Checkers</span>
            </div>

            {/* App-provided Screens */}
            <div className="bg-teal-600 text-white rounded-lg p-3 text-center">
              <span className="text-xs font-semibold">App-provided Screens</span>
            </div>
            <div className="bg-teal-600 text-white rounded-lg p-3 text-center">
              <span className="text-xs font-semibold">Application Microservices</span>
            </div>
            <div className="text-xs text-muted-foreground italic text-center">
              Integration via configured actions
            </div>
          </div>

          {/* Arrow from Portal to Core */}
          <div className="col-span-1 flex flex-col items-center justify-center pt-16 gap-1">
            <div className="bg-muted/50 border border-border rounded-md px-2 py-1">
              <p className="text-[10px] text-muted-foreground text-center leading-tight">API calls for UI and workflow services</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary" />
            <div className="bg-muted/50 border border-border rounded-md px-2 py-1 mt-4">
              <p className="text-[10px] text-muted-foreground text-center leading-tight">API calls to update and track workflows</p>
            </div>
          </div>

          {/* Center Column - SmartFlow Core */}
          <div className="col-span-5 border-2 border-primary/40 rounded-xl p-4 bg-primary/5">
            <div className="text-center mb-4">
              <h3 className="font-bold text-foreground text-base">RDT-SmartFlow</h3>
              <p className="text-xs text-muted-foreground">
                Managed service with APIs to maintain workflow and task definitions, create/manage cases, workflows and tasks
              </p>
            </div>

            {/* Inner Components Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* GAIA Deployed */}
              <div className="border border-border rounded-lg p-3 bg-card">
                <div className="flex items-center gap-1.5 mb-1">
                  <Cloud className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold text-foreground">GAIA deployed</span>
                </div>
                <p className="text-[11px] font-medium text-foreground mb-1">Domain-specific clusters</p>
                <div className="flex justify-center my-2">
                  <Cloud className="w-8 h-8 text-teal-500/40" />
                </div>
                <p className="text-[11px] text-muted-foreground text-center">Logical Environment segregation</p>
              </div>

              {/* JBPM */}
              <div className="border border-border rounded-lg p-3 bg-card">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-bold text-foreground">JBPM 7.x</span>
                </div>
                <p className="text-[11px] font-medium text-foreground mb-1">Open source BPM engine</p>
                <div className="flex justify-center gap-1 my-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </div>
                <p className="text-[11px] text-muted-foreground text-center">Custom Task Types for flexible design</p>
              </div>
            </div>

            {/* GTI Search & GAIA Oracle */}
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border rounded-lg p-3 bg-card">
                <div className="flex items-center gap-1.5 mb-1">
                  <Search className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold text-foreground">GTI Search as a Service</span>
                </div>
                <div className="flex justify-center my-2">
                  <Database className="w-6 h-6 text-muted-foreground/50" />
                </div>
                <p className="text-[11px] text-muted-foreground text-center">Search index of cases and tasks for fast display</p>
              </div>

              <div className="border border-border rounded-lg p-3 bg-card">
                <div className="flex items-center gap-1.5 mb-1">
                  <Database className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-foreground">GAIA Oracle Service</span>
                </div>
                <div className="flex justify-center my-2">
                  <Database className="w-6 h-6 text-primary/40" />
                </div>
                <p className="text-[11px] text-muted-foreground text-center">Cloud-native Oracle database</p>
              </div>
            </div>
          </div>

          {/* Arrow from Core to RDI */}
          <div className="col-span-1 flex flex-col items-center justify-center pt-8 gap-1">
            <div className="bg-muted/50 border border-border rounded-md px-2 py-1">
              <p className="text-[10px] text-muted-foreground text-center leading-tight">Case and Task data exposed via RDI message model</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>

          {/* Right Column - RDI & Analytics */}
          <div className="col-span-2 space-y-3">
            <div className="border-2 border-border rounded-xl p-4 bg-card">
              <h3 className="font-bold text-foreground text-sm mb-1">RDI</h3>
              <p className="text-[11px] text-muted-foreground mb-2">Out of the box case and task status messages</p>
              <div className="flex justify-center mb-2">
                <div className="border border-teal-500/30 rounded-md p-2">
                  <Settings className="w-5 h-5 text-teal-600" />
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground text-center">Designed to reflect CMMN standards</p>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-5 h-5 text-primary" />
              <span className="text-[10px] text-muted-foreground ml-1">Near real time feed into data mart</span>
            </div>

            <div className="border-2 border-border rounded-xl p-4 bg-card">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground text-sm">Reference Data Analytics</h3>
              </div>
              <div className="flex justify-center my-2">
                <Database className="w-6 h-6 text-primary/40" />
              </div>
              <p className="text-[11px] text-muted-foreground text-center">Standardized dashboards based on RDI messages</p>
            </div>

            {/* App Managers */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground justify-end">
              <Users className="w-4 h-4 text-primary" />
              <span>App Managers</span>
            </div>
            <div className="bg-muted/50 border border-border rounded-md px-2 py-1">
              <p className="text-[10px] text-muted-foreground text-center leading-tight">API calls to register and maintain workflows, tasks and actions</p>
            </div>
          </div>
        </div>

        {/* Bottom Row: IDA & CEM */}
        <div className="flex justify-center gap-4">
          <div className="border-2 border-border rounded-xl p-4 bg-card w-64">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-foreground text-sm">IDA</h3>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Pegasus supports RSAM and IDA for provisioning and authentication
            </p>
          </div>

          <div className="border-2 border-border rounded-xl p-4 bg-card w-64">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-foreground text-sm">CEM</h3>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Centralized entitlements simplify workflow, tasks and action definition
            </p>
          </div>

          <div className="bg-muted/50 border border-border rounded-md px-2 py-1 self-center">
            <p className="text-[10px] text-muted-foreground text-center leading-tight">Standard method to set groups and entitlements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
