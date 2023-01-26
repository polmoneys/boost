## useActionOutside

Trigger a callback when user clicks outside an element. 

## useAttachStylesheet

It may be useful to attach a stylesheet to the DOM instead of making many atomic styles changes. 

## useBinary


```tsx

const { state: landscapeState, actions: landscapeActions } = useBinary("off");

return (
    <Fragment>
        <Button onClick={() => landscapeActions.on()} >
            Open Dialog landscape
        </Button>
        <Dialog
            label="Landscape "
            id="dialog-landscape"
            onClose={() => landscapeActions.off()}
            open={landscapeState === "on"}
            actions={<IconTwitter size="lg" />}
        >
            <Group as="div">
                <HelveticaNeue>
                    Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
                    legere philosophia cum. Nisl vide ei eam, est at causae omnium,
                    veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
                    cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos,
                    mundi repudiare eum ei, vix in soleat epicurei moderatius. Odio
                    saepe cu cum, mea utamur deterruisset in, quem offendit sea ut. Per
                    ne mazim partem animal, pro corrumpit forensibus et.
                </HelveticaNeue>

                <Button onClick={() => portraitActions.on()}>
                    Trigger DialogPortrait
                </Button>
            </Group>
        </Dialog>
</Fragment>
)

// alternative


const [isOpen, toggleOpen] = useReducer((prevIsOpen) => !prevIsOpen, false);


```

## useCache

Wrap other hooks and save some computation. 


## useEvent 


Cleans up event listeners.


```tsx


useEvent('mousemove', handler);

const handler = useCallback(
    ({ clientX, clientY }) => {
    setStateX({ x: clientX, y: clientY });
    },
    [stateX]
);


```


## useFormFocusout


```tsx

useFormFocusout("test", () => console.log("focused out of form"));

return (
    <form id="test">
        <Input
        id="test-input-search-1"
        value=""
        label="Username"
        placeholder="Search name"
        onChangeValue={val => console.log(val)}
        />
        <Input
        id="test-input-search-2"
        value=""
        label="Location"
        placeholder="Search country"
        onChangeValue={val => console.log(val)}
        />
        <Input
        id="test-input-search-3"
        value=""
        label="Language"
        placeholder="Search **language**"
        onChangeValue={val => console.log(val)}
        />
        <Button>Trappp</Button>
    </form>
)

```


## useImageSize

Get image size.  

## useImagesLoaded

Callback when all images have loaded.   


## useInput


```tsx


const [value, onChange, error] = useInput({
    initial: "",
    validation: VALIDATE_USERNAME,
});

return (
    <Fragment>
        <Input
            value={value}
            onChange={e => {
            const nextValue = e.target.value;
            onChange(nextValue);
            }}
            classNames={{
            input: "accent-light",
            }}
            id="test-error-input"
            errorElementId="test-error-input-error"
            label="Username"
            placeholder="Type username"
            onChangeValue={val => console.log(val)}
        />
        {error !== undefined && (
            <HelveticaNeueBold
            className="color-error text-left"
            aria-live="polite"
            >
            <IconCross size="lg" />
            <span id="test-error-input-error">
                {error !== undefined ? error : ""}
            </span>
            </HelveticaNeueBold>
        )}
    </Fragment>
)

```

## useIsPortrait 


The only size-aware mediaquery that makes sense imo is orientation. 


```tsx

const isPortrait = useIsPortrait();

```

## useList

Crud an array of items. 

## useMap

Use it to render and CRUD **collections**. Shape of entries should be ```[ string , any]```. 

## useNewBrowserTab

Open a new browser tab as Apple.com does for chat support. 

## useNumber

'Crud' a number. 

## usePullToRefresh

Touch **only**. 

```tsx

  const { isPulling } = usePullToRefresh({
    onEndPTR: () => console.log("END PTR"),
    durationPTR: 3000,
  });

```


## useSelection


```tsx

 const [{ output, all, mixed }, { onFollowerChange, onLeadChange }] =
    useSelection({
  mayo: false,
  mustard: true,
  ketchup: false,
};);

const isMixed = mixed === "mixed";
const leaderCheckboxLabel = isMixed ? "Some selected" : all ? " All selected" : " None selected";

return (
    <Fragment>
      <Checkbox
            isMixed={isMixed}
            checked={!isMixed && mixed === true}
            label={leaderCheckboxLabel}
            name="parent"
            value="parent"
            id="parent-checkbox-test"
            onChange={ev => onLeadChange()}
        />

            {Object.entries(output).map(([value, state]) => (
              <div key={value}>
                <Checkbox
                  name={value.toString()}
                  label={value.toString()}
                  id={`${value.toString()}-test-checkbox`}
                  checked={state as boolean}
                  value={value}
                  onChange={ev => onFollowerChange(ev)}
                />
              </div>
            ))}
    </Fragment>
)

```


## useSet

Use it to render and CRUD unique strings like in a ```<TagInput/>```. 


## useStartTyping

On keydown focus input. 

## useString

'CRUD' a string.


## useUrlParams (coming soon)

Sync URL with app state with params. 

