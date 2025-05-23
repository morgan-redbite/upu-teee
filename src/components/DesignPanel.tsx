import React from 'react';
import { Lightbulb, Leaf, RefreshCw } from 'lucide-react';

const DesignPanel: React.FC = () => {
  return (
    <div className="rounded-xl overflow-hidden h-full min-h-[500px] flex flex-col relative">
      {/* Marble-like background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Marble pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-emerald-700/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-teal-600/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-emerald-800/10 to-transparent"></div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-center p-8 h-full">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-3">
            Give Your Electronics a Second Life
          </h2>
          <p className="text-emerald-700/80 text-lg mb-6 leading-relaxed">
            By recycling your e-waste, you're helping reduce landfill pollution and conserving valuable resources.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full">
              <Leaf className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-medium text-emerald-800 text-lg">Environmental Impact</h3>
              <p className="text-emerald-700/70">
                "Every device recycled saves 5-20 kg of carbon emissions."
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full">
              <RefreshCw className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-medium text-emerald-800 text-lg">Circular Economy</h3>
              <p className="text-emerald-700/70">
                "Up to 90% of materials in electronics can be recovered and reused."
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full">
              <Lightbulb className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-medium text-emerald-800 text-lg">Smart Disposal</h3>
              <p className="text-emerald-700/70">
                "Proper e-waste recycling keeps harmful toxins out of our soil and water."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPanel;