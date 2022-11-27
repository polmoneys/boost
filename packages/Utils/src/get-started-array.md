
## Utils/array


```ts


import { matchSorter } from 'match-sorter';

const [activeSorter, setActiveSorter] = useState<{
    property: keyof ListItem;
    isDescending: boolean;
}>({
    property: 'id',
    isDescending: false,
});
const [activeFilters, setActiveFilters] = useState<Array<{ property: string; isTruthyPicked: boolean }>>([]);
const [query, setQuery] = useState<string>('');
const [searchResults, setResults] = useState([]);
useEffect(() => {
    let results;
    const isSearching = query.trim() !== '';
    if (isSearching) {
        results = matchSorter(listItems, query, {
            keys: ['title'],
        })
            .filter((widget) => genericFilter<any>(widget, activeFilters))
            .sort((widgetA, widgetB) => genericSort<any>(widgetA, widgetB, activeSorter));
    } else {
        results = listItems
            .filter((widget) => genericFilter<any>(widget, activeFilters))
            .sort((widgetA, widgetB) => genericSort<any>(widgetA, widgetB, activeSorter));
    }

    setResults(results);
}, [activeFilters, activeSorter, query]);

const handleReset = () => {
    setQuery('');
    setActiveFilters([]);
    setActiveSorter({
        property: 'id',
        isDescending: false,
    });
};


```