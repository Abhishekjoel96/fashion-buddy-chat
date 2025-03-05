
import { useEffect, useState } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Sample data for the charts
const tryOnData = [
  { name: 'Jan', count: 42 },
  { name: 'Feb', count: 56 },
  { name: 'Mar', count: 78 },
  { name: 'Apr', count: 92 },
  { name: 'May', count: 123 },
  { name: 'Jun', count: 145 },
];

const skinToneData = [
  { name: 'Light', value: 35 },
  { name: 'Medium', value: 40 },
  { name: 'Olive', value: 15 },
  { name: 'Deep', value: 10 },
];

const COLORS = ['#4f46e5', '#7c3aed', '#a855f7', '#ec4899'];

const Analytics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('analytics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChartWidth(320);
      } else {
        setChartWidth(0); // Use responsive container
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="analytics" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Dashboard</h2>
          <p className="text-fashion-600 max-w-2xl mx-auto">
            Track virtual try-ons and skin color analysis with our comprehensive analytics dashboard.
          </p>
        </div>

        <div id="analytics-section" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className={`glass-card rounded-xl p-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6">Virtual Try-On Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tryOnData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="name" stroke="#374151" />
                <YAxis stroke="#374151" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' 
                  }} 
                />
                <Bar 
                  dataKey="count" 
                  name="Virtual Try-Ons" 
                  fill="#4f46e5"
                  radius={[4, 4, 0, 0]} 
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div 
            className={`glass-card rounded-xl p-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6">Skin Tone Analysis</h3>
            <div className="flex items-center justify-center h-[300px]">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={skinToneData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {skinToneData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' 
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div 
          className={`mt-12 glass-card rounded-xl p-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h4 className="text-4xl font-bold text-primary mb-2">2,547</h4>
              <p className="text-fashion-600">Monthly Try-Ons</p>
            </div>
            <div className="text-center p-4 border-y md:border-y-0 md:border-x border-gray-200 dark:border-gray-700">
              <h4 className="text-4xl font-bold text-primary mb-2">89%</h4>
              <p className="text-fashion-600">Conversion Rate</p>
            </div>
            <div className="text-center p-4">
              <h4 className="text-4xl font-bold text-primary mb-2">1,203</h4>
              <p className="text-fashion-600">Active Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
