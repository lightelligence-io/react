```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<div>
    <V2Grid>
        <V2GridItem size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card color="primary">
                Responsive
            </Card>
        </V2GridItem>
        <V2GridItem size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card>
                Responsive
            </Card>
        </V2GridItem>
        <V2GridItem size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card>
                Offset
            </Card>
        </V2GridItem>
        <V2GridItem size="auto">
            <Card color="primary">
                Auto Width
            </Card>
        </V2GridItem>
        <V2GridItem size="auto">
            <Card>
                Auto width
            </Card>
        </V2GridItem>
        <V2GridItem size="auto">
            <Card>
                Auto width
            </Card>
        </V2GridItem>
    </V2Grid>
</div>
```
