# Development Notes

## Recent Updates

### December 2025

#### Markdown Support ✨

Added support for opening and rendering markdown files directly in the portfolio! Now you can:

- View `.md` files from the Finder
- Enjoy GitHub Flavored Markdown rendering
- See properly styled code blocks, tables, and more

#### Features Implemented

- [x] Markdown window component
- [x] React-markdown integration
- [x] Custom styling for all markdown elements
- [x] Loading and error states
- [x] Syntax highlighting for code blocks

## Development Tips

### Working with Windows

Each window component follows a consistent pattern:

1. Import `WindowWrapper` HOC
2. Import `WindowControls` for window buttons
3. Use `useWindowStore` to access window data
4. Export wrapped component

Example:

```typescript
import { WindowWrapper } from "~/hoc/WindowWrapper";
import { WindowControls } from "~/components/WindowControls";
import { useWindowStore } from "~/store/window";

const MyWindow = () => {
  const { windows } = useWindowStore();
  const data = windows.mywindow.data;

  return (
    <div>
      <WindowControls target="mywindow" />
      {/* Your content */}
    </div>
  );
};

export const MyWindowComponent = WindowWrapper(MyWindow, "mywindow");
```

### Adding New File Types

To add a new file type to the Finder:

1. Create a window component in `src/windows/`
2. Add window config to `WINDOW_CONFIG` in `src/constants/index.ts`
3. Add file entries to location data
4. Update Finder logic if needed

### Useful Commands

```bash
# Development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build
npm run build
```

## Architecture Notes

### State Management

- **Window Store** - Manages window open/close state and z-index
- **Location Store** - Handles Finder navigation and active location

### File System Structure

Files are organized into locations:

- **Work** - Project portfolios
- **About** - Personal information
- **Resume** - CV and professional documents
- **Trash** - Deleted items

## Future Ideas

- [ ] Support for PDF preview
- [ ] Video file support
- [ ] Music player window
- [ ] Calendar integration
- [ ] Notes app

---

_Last updated: December 3, 2025_
