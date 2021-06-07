import { ActionButtons } from './action-buttons';
import { Search } from './search';

export function FileStatus() {
    return (
        <div className="file-status">
            <div className="toolbar">
                <Search />
                <ActionButtons />
            </div>
        </div>
    );
}