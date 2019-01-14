```js
initialState = { modalOpen: false};
const toggleModal = () => {
  setState({ modalOpen: !state.modalOpen });
};

const onSubmit = () => {
  alert('All errors have been fixed!');
  setState({ modalOpen: false });
};
<div>
  <Button color="primary" onClick={toggleModal}>Open Error Modal</Button>
  <Modal
    type="error"
    title="Error!!!!!"
    open={state.modalOpen}
    onClose={toggleModal}>
    <ModalContent>
      <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
    </ModalContent>
    <ModalFooter>
      <Button outline onClick={toggleModal}>Close</Button>
      <Button onClick={onSubmit}>Check</Button>
    </ModalFooter>
  </Modal>
</div>
```

```js
initialState = { modalOpen: false};
const toggleModal = () => {
  setState({ modalOpen: !state.modalOpen });
};
<div>
    <Button color="primary" onClick={toggleModal}>Classic Modal</Button>
    <Modal open={state.modalOpen} onClose={toggleModal}>
      <ModalContent>
        <Headline>Headline</Headline>
        <Paragraph>
          Lorem ipsum dolor sit amet
        </Paragraph>
      </ModalContent>
      <ModalFooter>
        <Button color="primary" onClick={toggleModal}>Ok</Button>
      </ModalFooter>
    </Modal>
</div>
```
```js
initialState = { modalOpen: false };
const toggleModal = () => {
  setState({modalOpen: !state.modalOpen});
};
<div>
  <Button color="primary" onClick={toggleModal}>Fullscreen Modal</Button>
  <Modal open={state.modalOpen} onClose={toggleModal} fullscreen>
    <ModalContent>
      <Paragraph>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   
      </Paragraph>
      <Paragraph>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
      </Paragraph>
      <Paragraph>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
      </Paragraph>
    </ModalContent>
  </Modal>
</div>
```
