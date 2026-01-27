import { useState } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { ProjectCardForm } from './components/ProjectCardForm';
import { JiraTicketPreview } from './components/JiraTicketPreview';
import { ExportControls } from './components/ExportControls';
import { useCardConverter } from './hooks/useCardConverter';
import type { ProjectCard } from './types/projectCard';
import type { MappingConfig } from './types/jiraTicket';

/**
 * Main application component
 * Orchestrates the workflow: Form Input → Conversion → Preview → Export
 */
function App() {
  const { jiraTicket, isConverted, convertCard, reset } = useCardConverter();
  const [jiraProjectKey, setJiraProjectKey] = useState('PROJ');

  const handleFormSubmit = (card: ProjectCard) => {
    const config: MappingConfig = {
      jiraProjectKey,
      createSubtasks: false, // MVP: no subtask generation
    };

    const result = convertCard(card, config);
    
    if (!result.success) {
      alert(`Conversion failed: ${result.error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <FileText className="text-primary-600" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Project Card → JIRA Converter
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Transform executive recommendations into actionable JIRA tickets
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!isConverted ? (
          // Step 1: Input Form
          <div className="space-y-6">
            {/* Configuration Section */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                JIRA Project Configuration
              </h2>
              <div className="max-w-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  JIRA Project Key *
                </label>
                <input
                  type="text"
                  value={jiraProjectKey}
                  onChange={(e) => setJiraProjectKey(e.target.value.toUpperCase())}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="e.g., PROJ, TECH, OPS"
                  maxLength={10}
                />
                <p className="mt-2 text-xs text-gray-500">
                  The project key where this ticket will be created (usually 3-4 uppercase letters)
                </p>
              </div>
            </div>

            {/* Project Card Form */}
            <ProjectCardForm onSubmit={handleFormSubmit} />
          </div>
        ) : (
          // Step 2: Preview & Export
          <div className="space-y-6">
            {/* Workflow Indicator */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-center gap-4 text-sm">
                <span className="flex items-center gap-2 text-green-600 font-medium">
                  <FileText size={16} />
                  Project Card
                </span>
                <ArrowRight size={16} className="text-gray-400" />
                <span className="flex items-center gap-2 text-primary-600 font-medium">
                  <FileText size={16} />
                  JIRA Ticket
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Preview (2/3 width) */}
              <div className="lg:col-span-2">
                <JiraTicketPreview ticket={jiraTicket!} />
              </div>

              {/* Export Controls (1/3 width) */}
              <div>
                <ExportControls ticket={jiraTicket!} onReset={reset} />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <p>
              MVP v1.0 | Single card conversion | JSON & Markdown export
            </p>
            <p className="mt-1">
              Roadmap: PDF/PowerPoint parsing, batch conversion, direct JIRA API integration
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
