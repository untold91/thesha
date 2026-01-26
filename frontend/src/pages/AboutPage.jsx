import React, { useEffect } from 'react';
import {
  Award,
  Users,
  Target,
  Lightbulb,
  MapPin,
  Building2,
  Wrench
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

/* SVG / GRID CONSTANTS */
const SVG_VIEWBOX_WIDTH = 600;
const SVG_VIEWBOX_HEIGHT = 720;

const GRID_CELL_SIZE = 14;
const GRID_DOT_SIZE = 8;
const GRID_PADDING = 14;

const LABEL_DIAGONAL_OFFSET = 60;
const LABEL_HORIZONTAL_OFFSET = 80;

const LABEL_FONT_SIZE = 18;
const LABEL_X_OFFSET = 6;
const LABEL_Y_OFFSET = 5;

/* India Map Grid (unchanged) */
const layoutGrid = [
  [8, 3], [7, 5], [8, 9], [9, 8], [8, 8], [8, 8], [8, 8],
  [10, 6], [9, 6], [9, 7], [8, 10], [7, 11, 38, 1],
  [7, 10, 36, 4], [6, 12, 35, 6], [2, 17, 28, 1, 33, 8],
  [2, 21, 28, 1, 34, 5], [3, 22, 28, 10], [3, 26, 31, 7],
  [3, 26, 31, 7], [4, 24, 34, 3], [0, 29, 33, 3],
  [0, 29, 33, 1, 35, 1], [2, 28, 35, 1], [1, 29],
  [2, 3, 6, 22], [3, 1, 6, 21], [6, 21], [5, 20],
  [5, 19], [6, 17], [6, 16], [6, 15], [6, 14],
  [6, 13], [7, 10], [8, 9], [8, 9], [8, 9],
  [8, 9], [9, 8], [9, 7], [10, 6], [10, 6],
  [11, 4], [11, 3], [12, 1],
];

/* SVG Marker Helper */
const StateMarker = ({ marker, state }) => {
  const { row, col, color, direction } = marker;

  const x =
    GRID_PADDING +
    col * GRID_CELL_SIZE +
    (GRID_CELL_SIZE - GRID_DOT_SIZE) / 2;

  const y =
    GRID_PADDING +
    row * GRID_CELL_SIZE +
    (GRID_CELL_SIZE - GRID_DOT_SIZE) / 2;

  const midX = x + LABEL_DIAGONAL_OFFSET;
  const midY =
    direction === 'top'
      ? y - LABEL_DIAGONAL_OFFSET
      : y + LABEL_DIAGONAL_OFFSET;

  const endX = midX + LABEL_HORIZONTAL_OFFSET;
  const endY = midY;

  return (
    <>
      <rect
        x={x}
        y={y}
        width={GRID_DOT_SIZE}
        height={GRID_DOT_SIZE}
        rx={1}
        fill={color}
      />

      <path
        d={`M ${x + GRID_DOT_SIZE / 2} ${y + GRID_DOT_SIZE / 2}
            L ${midX} ${midY}
            L ${endX} ${endY}`}
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      <text
        x={endX + LABEL_X_OFFSET}
        y={endY + LABEL_Y_OFFSET}
        fontSize={LABEL_FONT_SIZE}
        fontWeight="700"
        fill="currentColor"
        className="text-black dark:text-white"
      >
        {`${state.name}`}
      </text>
    </>
  );
};

const AboutPage = () => {
  const { stats } = mockData.company;
  const presence = {
    states: [
      {
        name: 'Andhra Pradesh',
        status: 'Active Operations',
        description: 'Headquarters & Primary Service Hub',
        marker: {
          row:32,
          col:17,
          color:"#3498db",
          direction:"top"
        }
      },
      {
        name: 'Telangana',
        status: 'Active Operations',
        description: 'Sales & Extended Service Coverage',
        marker: {
          row:30,
          col:14,
          color:"#e74c3c",
          direction:"bottom"
        }
      }
    ],
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderRegionIcon = (description) => {
    if (description.toLowerCase().includes('headquarters')) {
      return <Building2 className="w-4 h-4" />;
    }
    return <Wrench className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen pt-16" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white" data-testid="about-title">
              About
            </h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              Leading provider of smart home automation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Company Story */}
            <div className="mb-16">
              <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed mb-6">
                <strong>{mockData.company.name}</strong>, under our brand <strong>{mockData.company.brand}</strong>, is dedicated to transforming homes and offices into intelligent, connected spaces. We specialize in providing comprehensive smart home automation solutions that combine cutting-edge technology with user-friendly design.
              </p>
              <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                With years of experience in the automation industry, we&apos;ve helped hundreds of clients across India embrace the future of smart living. Our solutions are tailored to meet the unique needs of residential properties, commercial offices, and hospitality establishments.
              </p>
            </div>

            {/* India Map Infographic - Our Presence Across India */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
                Our Presence Across India
              </h2>

              <div className="bg-black/5 dark:bg-white/5 p-10 lg:p-12 rounded-3xl border border-black/10 dark:border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                  {/* Map */}
                  <div className="lg:col-span-2 flex justify-center">
                    <div className="w-full max-w-xl max-h-[640px]">
                      <svg
                        viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
                        className="w-full h-auto"
                      >
                        {layoutGrid.flatMap((rowData, row) =>
                          rowData.reduce((acc, val, idx) => {
                            if (idx % 2 === 0) {
                              const col = val;
                              const count = rowData[idx + 1];
                              for (let j = 0; j < count; j++) {
                                acc.push(
                                  <rect
                                    key={`${row}-${col + j}`}
                                    x={
                                      GRID_PADDING +
                                      (col + j) * GRID_CELL_SIZE +
                                      (GRID_CELL_SIZE - GRID_DOT_SIZE) / 2
                                    }
                                    y={
                                      GRID_PADDING +
                                      row * GRID_CELL_SIZE +
                                      (GRID_CELL_SIZE - GRID_DOT_SIZE) / 2
                                    }
                                    width={GRID_DOT_SIZE}
                                    height={GRID_DOT_SIZE}
                                    rx={1}
                                    className="fill-black/30 dark:fill-white/30"
                                  />
                                );
                              }
                            }
                            return acc;
                          }, [])
                        )}

                        {presence.states.map((state) => (
                          <StateMarker
                            key={state.name}
                            state={state}
                            marker={state.marker}
                          />
                        ))}
                      </svg>
                    </div>
                  </div>

                  {/* Info Panel */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      Active Regions
                    </h3>

                    {presence.states.map((state) => (
                      <Card
                        key={state.name}
                        className="border border-black/20 dark:border-white/20"
                      >
                        <CardContent className="p-4 space-y-2">
                          <div className="flex items-center gap-2 font-semibold text-black dark:text-white">
                            <span>{state.name}</span>
                          </div>

                          <div className="text-sm text-black/70 dark:text-white/70">
                            {state.status}
                          </div>

                          <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
                            {renderRegionIcon(state.description)}
                            <span>{state.description}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <p className="text-center text-sm text-black/60 dark:text-white/60 mt-6">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Currently serving {presence.states[0].name} and {presence.states[1].name}
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Award, title: 'Quality First', text: 'Premium devices with professional installation.' },
                { icon: Users, title: 'Customer Focus', text: '24/7 support and personalized solutions.' },
                { icon: Lightbulb, title: 'Innovation', text: 'Latest smart home technologies.' },
                { icon: Target, title: 'Mission', text: 'Smart living for everyone.' },
              ].map(({ icon: Icon, title, text }) => (
                <Card key={title} className="border-2 border-black/10 dark:border-white/10">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                      {title}
                    </h3>
                    <p className="text-black/70 dark:text-white/70">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center pt-8 border-t border-black/10 dark:border-white/10">
              <div>
                <div className="text-4xl font-bold text-black dark:text-white">
                  {stats.project_completed}
                </div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black dark:text-white">
                  {stats.states_covered}
                </div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  States Served
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black dark:text-white">
                  {stats.client_satisfaction}
                </div>
                <div className="text-sm text-black/60 dark:text-white/60">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
