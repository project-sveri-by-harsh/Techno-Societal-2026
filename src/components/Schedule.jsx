import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineClock, HiOutlineMapPin, HiOutlineMicrophone, HiOutlineAcademicCap, HiOutlinePause } from 'react-icons/hi2';
import { SCHEDULE_DATA } from '../data/scheduleData';

const TYPE_STYLES = {
  keynote: { icon: HiOutlineMicrophone, color: 'var(--color-cyber-magenta)', label: 'Keynote' },
  session: { icon: HiOutlineAcademicCap, color: 'var(--color-cyber-cyan)', label: 'Session' },
  ceremony: { icon: HiOutlineMicrophone, color: '#f5c84c', label: 'Ceremony' },
  break: { icon: HiOutlinePause, color: '#94a3b8', label: 'Break' },
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('day1');
  const schedule = SCHEDULE_DATA[activeDay];

  return (
    <section id="schedule" className="relative py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-white mb-3 uppercase tracking-wider drop-shadow-md"
        >
          Event Schedule
        </motion.h2>
        <div className="w-12 h-1 bg-[var(--color-cyber-purple)] mx-auto mb-12 shadow-[0_0_10px_var(--color-cyber-purple)]" />

        {/* Day Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {Object.entries(SCHEDULE_DATA).map(([key, day]) => (
            <button
              key={key}
              onClick={() => setActiveDay(key)}
              className={`relative px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
                activeDay === key
                  ? 'bg-gradient-to-r from-[var(--color-cyber-purple)] to-[var(--color-cyber-magenta)] text-white shadow-[0_0_20px_rgba(112,0,255,0.5)]'
                  : 'glass-panel text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="block text-base">{day.label}</span>
              <span className="block text-xs opacity-70 mt-0.5">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {schedule.events.map((event, index) => {
              const style = TYPE_STYLES[event.type];
              const Icon = style.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={`glass-panel rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group ${
                    event.type === 'break' ? 'opacity-70' : ''
                  }`}
                  style={{ borderLeftWidth: '3px', borderLeftColor: style.color }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    {/* Time */}
                    <div className="flex items-center gap-2 sm:w-40 shrink-0">
                      <HiOutlineClock className="w-4 h-4 text-white/50" />
                      <span className="text-sm font-bold text-white/80 tabular-nums">{event.time}</span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 shrink-0" style={{ color: style.color }} />
                        <h3 className="text-base font-bold text-white group-hover:text-[var(--color-cyber-cyan)] transition-colors truncate">
                          {event.title}
                        </h3>
                      </div>
                      {event.description && (
                        <p className="text-xs text-white/50 ml-6">{event.description}</p>
                      )}
                      {event.speaker && event.speaker !== 'TBA' && (
                        <p className="text-xs text-[var(--color-cyber-magenta)] ml-6 font-medium">Speaker: {event.speaker}</p>
                      )}
                    </div>

                    {/* Venue */}
                    <div className="flex items-center gap-1 text-xs text-white/40 sm:w-32 shrink-0">
                      <HiOutlineMapPin className="w-3 h-3" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-white/30 text-xs mt-8 italic">
          * Schedule is tentative and subject to change
        </p>
      </div>
    </section>
  );
}
