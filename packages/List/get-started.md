## List

An ``<ul>`` with slots **start/end** for it's items. 


## Usage


```jsx

<List label="List with end slot">
    <List.Item
        end={
        <Button className="accent-error" variant="icon">
            <IconBookmark stroke="var(--white)" />
        </Button>
        }
    >
        Some serious content
    </List.Item>
    <List.Item
        end={
        <Button className="accent-error" variant="icon">
            <IconBookmark stroke="var(--white)" />
        </Button>
        }
    >
        Some serious content
    </List.Item>
    <List.Item
        end={
        <Button className="accent-error" variant="icon">
            <IconBookmark stroke="var(--white)" />
        </Button>
        }
    >
        Some serious content
    </List.Item>
</List>
        


```

