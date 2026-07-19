import { ASSIGNMENTS, TABS } from './assignmentsData';

function getCount(key, list) {
  if (key === 'all')       return list.length;
  if (key === 'overdue')   return list.filter((a) => a.status === 'overdue' || a.status === 'late').length;
  return list.filter((a) => a.status === key).length;
}

export default function AssignmentTabs({ active, onChange, filteredList }) {
  return (
    <div className="at-tabs" role="tablist">
      {TABS.map((tab) => {
        const count = getCount(tab.key, filteredList);
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            role="tab"
            aria-selected={isActive}
            className={`at-tab ${isActive ? 'at-tab--active' : ''}`}
            onClick={() => onChange(tab.key)}
            type="button"
          >
            {tab.label}
            {count > 0 && (
              <span className={`at-tab-badge ${isActive ? 'at-tab-badge--active' : ''} ${tab.key === 'overdue' ? 'at-tab-badge--danger' : ''}`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
