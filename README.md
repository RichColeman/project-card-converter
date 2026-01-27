# Project Card → JIRA Converter

**Executive Summary:** Transform project recommendation cards into actionable JIRA tickets for seamless team handoff.

## Overview

This application converts executive-level project cards (typically from PowerPoint or PDF recommendations) into structured JIRA tickets that team leaders and project managers can immediately use for implementation tracking.

### Key Features

- **Guided Form Entry**: Multi-section form with validation for all project card components
- **Visual JIRA Preview**: See exactly how your ticket will appear in JIRA
- **Multiple Export Formats**: JSON (for bulk import) and Markdown (for manual entry)
- **Financial Documentation**: Built-in enforcement of assumption tracking per consulting best practices
- **Type-Safe Architecture**: Full TypeScript coverage for data integrity

### MVP Scope (v1.0)

✅ Manual form entry for project cards  
✅ Single card conversion  
✅ Visual JIRA ticket preview  
✅ JSON and Markdown export  
✅ Copy-to-clipboard functionality  

### Roadmap (v2.0+)

🔲 PDF/PowerPoint file upload with parsing  
🔲 Batch conversion (multiple cards → multiple tickets)  
🔲 Direct JIRA API integration  
🔲 Template library for common project types  
🔲 Team collaboration features  

---

## Architecture

### Technology Stack

| Layer | Technology | Justification |
|-------|-----------|---------------|
| **Frontend** | React 18 + TypeScript | Type safety, component reusability |
| **Styling** | Tailwind CSS | Rapid UI development, consistent design system |
| **Forms** | React Hook Form + Zod | Performance optimization, schema validation |
| **State** | React Hooks (useState, useCallback) | Lightweight for single-card workflow |
| **Build** | Vite | Fast development, optimized production builds |

### Project Structure

```
src/
├── types/
│   ├── projectCard.ts      # Source data model with financial guidelines
│   └── jiraTicket.ts        # Target JIRA format
├── lib/
│   └── cardToJiraMapper.ts  # Core transformation logic
├── components/
│   ├── ProjectCardForm.tsx  # Multi-section input form
│   ├── JiraTicketPreview.tsx# Visual ticket representation
│   └── ExportControls.tsx   # Copy/download functionality
├── hooks/
│   └── useCardConverter.ts  # Conversion state management
└── App.tsx                  # Main orchestration
```

### Data Flow

```
User Input (Form)
    ↓
ProjectCard (validated)
    ↓
CardToJiraMapper.transform()
    ↓
JiraTicket (structured)
    ↓
Preview + Export
```

---

## Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation Steps

```bash
# 1. Install dependencies
cd project-card-converter
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview  # Test production build locally
```

---

## Usage Guide

### Step 1: Configure JIRA Project

Enter your JIRA project key (e.g., "PROJ", "TECH") at the top of the form.

### Step 2: Fill Project Card Details

Complete all required sections:

1. **Basic Information**
   - Title, description, priority, impact level

2. **Key Activities**
   - Implementation steps (minimum 1 required)

3. **Business Benefits**
   - Qualitative benefits (preferred format: "Enable X", "Improve Y")
   - Quantitative impacts (optional, requires source attribution)

4. **Effort Estimate**
   - Duration, complexity, resources

5. **Cost Estimate** (Optional)
   - Only if based on client data or documented assumptions
   - All cost fields require assumption documentation

6. **Additional Context**
   - Dependencies, risks, stakeholders

7. **Metadata**
   - Engagement name, author

### Step 3: Generate Preview

Click "Generate JIRA Ticket Preview" to see the formatted ticket.

### Step 4: Export

Choose your export format:

- **JSON**: For JIRA bulk import or API integration
- **Markdown**: For copy-paste into JIRA description field

---

## Financial Documentation Guidelines

This application enforces consulting best practices for financial claims:

### ✅ DO:

- Use qualitative benefits by default: "Enable revenue optimization", "Improve efficiency"
- Document source for any quantitative claim: "15% reduction (Source: Client benchmark data)"
- Include assumptions for all cost estimates
- Flag estimates pending client validation

### ❌ DON'T:

- Create financial figures without supporting data
- Omit source attribution for quantitative impacts
- Provide cost estimates without documenting assumptions

### Example: Quantitative Impact (Correct)

```typescript
{
  metric: "Customer acquisition cost",
  impact: "15-20% reduction",
  source: "Client-provided benchmark data from Q4 2024",
  assumptions: ["Based on current conversion rates", "Assumes no change in ad spend"]
}
```

---

## Type Definitions

### ProjectCard

```typescript
interface ProjectCard {
  title: string;
  description: string;
  keyActivities: string[];
  businessBenefits: {
    qualitative: string[];        // Preferred
    quantitative?: Array<{
      metric: string;
      impact: string;
      source: string;             // REQUIRED
      assumptions?: string[];
    }>;
  };
  effortEstimate: {
    duration: string;
    complexity: 'Low' | 'Medium' | 'High';
    resources?: string;
  };
  impact: {
    level: 'Low' | 'Medium' | 'High';
    description: string;
  };
  cost?: {
    estimate: string;
    assumptions: string[];        // REQUIRED
    isEstimated: boolean;
    dataSource?: string;
  };
  // ... additional fields
}
```

### JiraTicket

```typescript
interface JiraTicket {
  project: string;
  issueType: 'Epic' | 'Story' | 'Task';
  summary: string;
  description: string;            // Markdown-formatted
  priority: 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';
  labels: string[];
  customFields?: {
    businessValue?: string;
    effortEstimate?: string;
    acceptanceCriteria?: string;
    // ... additional custom fields
  };
}
```

---

## Transformation Logic

### Priority Mapping

| Project Card | JIRA Priority |
|--------------|---------------|
| Critical + High Impact | Highest |
| High | High |
| Medium | Medium |
| Low | Low |

### Issue Type Determination

| Complexity | JIRA Issue Type | Rationale |
|-----------|----------------|-----------|
| High | Epic | Requires breakdown into smaller stories |
| Medium | Story | Sprint-sized work item |
| Low | Task | Simple implementation |

### Label Generation

Automatic labels include:
- `impact-{level}` (e.g., `impact-high`)
- `complexity-{level}` (e.g., `complexity-medium`)
- `priority-{level}` (if specified)
- Engagement identifier (sanitized from metadata)

---

## Testing

### Manual Testing Checklist

- [ ] Form validation prevents submission with incomplete data
- [ ] Quantitative benefits require source attribution
- [ ] Cost estimates require assumptions
- [ ] Preview displays all entered data correctly
- [ ] JSON export is valid and importable
- [ ] Markdown export is properly formatted
- [ ] Copy-to-clipboard works in all browsers
- [ ] "Create Another Ticket" resets form state

### Unit Tests (Future)

```bash
npm run test
```

Example test structure:

```typescript
describe('CardToJiraMapper', () => {
  it('should transform basic project card to JIRA ticket', () => {
    const card: ProjectCard = { /* test data */ };
    const config: MappingConfig = { jiraProjectKey: 'TEST' };
    const ticket = CardToJiraMapper.transform(card, config);
    
    expect(ticket.project).toBe('TEST');
    expect(ticket.issueType).toBe('Story');
    // ... additional assertions
  });
});
```

---

## Troubleshooting

### Issue: Form won't submit

**Solution:** Check browser console for validation errors. All required fields must be completed.

### Issue: Copy to clipboard fails

**Solution:** Ensure browser has clipboard permissions. Try the download option instead.

### Issue: JIRA import fails with JSON

**Solution:** Verify your JIRA instance supports JSON import and that custom field names match your JIRA configuration.

---

## Contributing

### Code Style

- Use TypeScript strict mode
- Follow ESLint configuration
- Document complex functions with JSDoc comments
- Prefer functional components and hooks

### Pull Request Process

1. Create feature branch from `main`
2. Add unit tests for new functionality
3. Update README if adding user-facing features
4. Ensure `npm run build` succeeds without errors

---

## License

MIT License - See LICENSE file for details

---

## Support

For questions or issues:
1. Check the troubleshooting section above
2. Review existing GitHub issues
3. Create a new issue with reproduction steps

---

## Changelog

### v1.0.0 (MVP)
- Initial release
- Manual form entry
- Single card conversion
- JSON and Markdown export
- Visual JIRA preview
