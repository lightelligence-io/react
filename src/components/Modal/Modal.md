## Description

Use modals to demand the user's confirmation or warn the user if he is making significant changes.

Use the *Modal* Component to render a modal.

```js
import { Modal, Button, Paragraph } from '@lightelligence/react';
initialState = { modalOpen: false};
const toggleModal = () => {
  setState({ modalOpen: !state.modalOpen });
};
<div>
    <Button color="primary" onClick={toggleModal}>Basic Modal</Button>
    <Modal
      title="All will be fine"
      open={state.modalOpen}
      content='Lorem ipsum dolor sit amet'
      actions={[
        <Button key="ok" buttonType="action" onClick={toggleModal}>Ok</Button>
      ]}
    />
</div>
```

## Context variations

The *Modal* can be rendered with different variations based on the context.

We support the following types:
- `critical`<br/>
  Use the critical *Modal* whenever you want to communicate a critical or error state to the user. Especially when proceeding will likely lead to an undesired outcome for the user that he is probably not aware of. e.g.: Deleting a role will lead to users being deleted from the tenant because they have no role afterward.

- `warning`<br/>
  The warning *Modal* is used when needing to show important information e.g. to prevent errors. e.g.: 15 of your devices have not responded, check your device management.

- `info`<br/>
  The info *Modal* can be used whenever an additional non-critical information should be provided to the user. The info will not have negative results no matter the users choice. e.g.: You have been invited to a tenant, accept or decline.

- `success`<br/>
  Use the success *Modal* to communicate a success message the user has to be made aware of. e.g.: You successfully finished an action.

- `action`<br/>
  Use the action *Modal* for changes that demand active user input. e.g.: Edit the description of a tenant.


```js
import { Modal, Button, FloatingList } from '@lightelligence/react';
initialState = { modalOpen: {
  error: false,
  warning: false,
  info: false,
  success: false,
  action: false,
}};
const toggleModal = (type) => {
  setState({ modalOpen: {
    ...state.modalOpen,
    [type]: !state.modalOpen[type]
  }});
};

const onSubmit = (type) => {
  alert('All errors have been fixed!');
  setState({ modalOpen: {
    ...state.modalOpen,
    [type]: false
  }});
};
<div>
  <FloatingList>
    <Button buttonType="destructive" onClick={() => toggleModal('error')}>Open Error Modal</Button>
    <Button buttonType="default" onClick={() => toggleModal('warning')}>Open Warning Modal</Button>
    <Button buttonType="default" onClick={() => toggleModal('info')}>Open Info Modal</Button>
    <Button buttonType="confirmative" onClick={() => toggleModal('success')}>Open Success Modal</Button>
    <Button buttonType="action" onClick={() => toggleModal('action')}>Open Action Modal</Button>
  </FloatingList>
  <Modal
    type={'critical'}
    title="Error!!!!!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.error}
    actions={[
      <Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('error')}
      >
        Cancel
      </Button>,
      <Button
        key="ok"
        buttonType="destructive"
        onClick={() => onSubmit('error')}
      >
        Ok
      </Button>
    ]}/>
  <Modal
    type={'warning'}
    title="Warning!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.warning}
    actions={[
      <Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('warning')}
      >
        Cancel
      </Button>,
      <Button
        key="ok"
        buttonType="primary"
        onClick={() => onSubmit('warning')}
      >
        Ok
      </Button>
    ]}/>
  <Modal
    type={'info'}
    title="Info!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.info}
    actions={[
      <Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('info')}
      >
        Cancel
      </Button>,
      <Button
        key="ok"
        buttonType="primary"
        onClick={() => onSubmit('info')}
      >
        Ok
      </Button>
    ]}/>
  <Modal
    type={'success'}
    title="Success!!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.success}
    actions={[
      <Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('success')}
      >
        Cancel
      </Button>,
      <Button
        key="ok"
        buttonType="primary"
        onClick={() => onSubmit('success')}
      >
        Ok
      </Button>
    ]}/>
  <Modal
    type={'action'}
    title="Action!!"
    content="Lorem ipsum dolor sit amet."
    open={state.modalOpen.action}
    actions={[
      <Button
        key="cancel"
        buttonType="default"
        emphasis="tertiary"
        onClick={() => toggleModal('action')}
      >
        Cancel
      </Button>,
      <Button
        key="ok"
        buttonType="primary"
        onClick={() => onSubmit('action')}
      >
        Ok
      </Button>
    ]}/>
</div>
```

## Custom Header Modals

In rare occasions the icon can be individually changed. Use the `icon` property to provide an icon.
You can also change the background color of the header using the `headerProps` property.

All styles of the modal can be changed using `modalProps`, `dialogProps`, `headerProps`, `contentProps`, and `footerProps`. *Use with care!*



```js
import classnames from 'classnames';
import { Modal, Button, Icon, Paragraph } from '@lightelligence/react';
import * as olt from '@lightelligence/styles';
initialState = { modalOpen: false};
const toggleModal = () => {
  setState({modalOpen: !state.modalOpen});
};
<div>
    <Button buttonType="default" onClick={toggleModal}>Modified Header and More Content</Button>
    <Modal
      title='Headline'
      icon={<Icon name="add-default" color="primary" />}
      headerProps={{style: {backgroundColor: 'black'}}}
      open={state.modalOpen}
      content={
        <>
          <Paragraph>
            Lorem ipsum dolor sit amet
          </Paragraph>
        </>
      }
      actions={[
        <Button key="ok" buttonType="action" onClick={toggleModal}>Ok</Button>
      ]}
    />
</div>
```


```js
import { Modal, Button, ModalContent, Paragraph } from '@lightelligence/react';
initialState = { modalOpen: false };
const toggleModal = () => {
  setState({modalOpen: !state.modalOpen});
};
<div>
  <Button buttonType="confirmative" onClick={toggleModal}>Wide Modal</Button>
  <Modal
    open={state.modalOpen}
    wide
    content={
      <section>
        <Paragraph>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </Paragraph>
        <Paragraph>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Paragraph>
        <Paragraph>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Paragraph>
        <Paragraph>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Paragraph>
        <Paragraph>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Paragraph>
      </section>
    }
    actions={[
      <Button
        key="ok"
        buttonType="confirmative"
        onClick={toggleModal}
      >
        Ok
      </Button>
    ]}/>
</div>
```
