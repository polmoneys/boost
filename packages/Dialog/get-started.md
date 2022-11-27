## Dialog

Dialogs with **ratio**, **Tray** version available. 

```tsx

interface Props {
  children: ReactNode;
  label: string;
  open: boolean;
  onClose: () => void;
  closeButton: ReactElement;
  ratio?: "portrait" | "landscape" | "tray";
  // Overlay background. Hint : var(--overlay)
  overlay?: string;
  // manage focus if two dialogs are open 
  isLastDialogOpened?: boolean;
  className?: string;

}

```


## Usage


```jsx


const { state: landscapeState, actions: landscapeActions } = useBinary("off");
const { state: portraitState, actions: portraitActions } = useBinary("off");
const { state: trayState, actions: trayActions } = useBinary("off");

return ( 
<Group>

    <Button  onClick={() => portraitActions.on()}>
      Dialog portrait
    </Button>

   <Button onClick={() => landscapeActions.on()}>
      Dialog landscape
   </Button>

   <Button onClick={() => trayActions.on()} variant="icon" >
      {trayState === "on" ? (
         <IconCaretDown size="lg" />
      ) : (
         <IconCaretUp size="lg" />
      )}
   </Button>

   <Dialog
        label="Landscape state"
        closeButton={
          <Button variant="icon" >
            <IconCross />
          </Button>
        }
        onClose={() => landscapeActions.off()}
        open={landscapeState === "on"}
      >

        <HelveticaNeue>
          Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
          legere philosophia cum.
        </HelveticaNeue>

        <Button onClick={() => portraitActions.on()}>
          Trigger DialogPortrait
        </Button>
      </Dialog>

      <Dialog
        label="Portrait state"
        isLastDialogOpened={portraitState === "on" && landscapeState === "on"}
        closeButton={
            <Button variant="icon">
            <IconCross />
          </Button>
        }
        ratio="portrait"
        onClose={() => portraitActions.off()}
        open={portraitState === "on"}
      >
        <HelveticaNeue> Odio saepe  cum, mea utamur deterruisset in, quem offendit sea ut. Per ne mazim.
        </HelveticaNeue>
      </Dialog>

      <Dialog.Tray
        label="Tray state"
        open={trayState === "on"}
        closeButton={
          <Button variant="icon">
            <IconCross />
          </Button>
        }
        onClose={() => trayActions.off()}
      >
        <HelveticaNeue>
          Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
          legere philosophia cum.
        </HelveticaNeue>
      </Dialog.Tray>
</Group>)


```
