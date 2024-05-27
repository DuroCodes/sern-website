---
editUrl: false
next: false
prev: false
title: "SernSubCommandData"
---

## Extends

- `APIApplicationCommandOptionBase`\<`ApplicationCommandOptionType.Subcommand`\>

## Properties

### description

> **description**: `string`

#### Inherited from

`APIApplicationCommandOptionBase.description`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:7

***

### description\_localizations?

> `optional` **description\_localizations**: `null` \| `Partial`\<`Record`\<`"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `null` \| `string`\>\>

#### Inherited from

`APIApplicationCommandOptionBase.description_localizations`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:8

***

### name

> **name**: `string`

#### Inherited from

`APIApplicationCommandOptionBase.name`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:5

***

### name\_localizations?

> `optional` **name\_localizations**: `null` \| `Partial`\<`Record`\<`"id"` \| `"en-US"` \| `"en-GB"` \| `"bg"` \| `"zh-CN"` \| `"zh-TW"` \| `"hr"` \| `"cs"` \| `"da"` \| `"nl"` \| `"fi"` \| `"fr"` \| `"de"` \| `"el"` \| `"hi"` \| `"hu"` \| `"it"` \| `"ja"` \| `"ko"` \| `"lt"` \| `"no"` \| `"pl"` \| `"pt-BR"` \| `"ro"` \| `"ru"` \| `"es-ES"` \| `"es-419"` \| `"sv-SE"` \| `"th"` \| `"tr"` \| `"uk"` \| `"vi"`, `null` \| `string`\>\>

#### Inherited from

`APIApplicationCommandOptionBase.name_localizations`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:6

***

### options?

> `optional` **options**: [`SernOptionsData`](/v4/api/type-aliases/sernoptionsdata/)[]

#### Source

[src/types/core-modules.ts:221](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/types/core-modules.ts#L221)

***

### required?

> `optional` **required**: `boolean`

#### Inherited from

`APIApplicationCommandOptionBase.required`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:9

***

### type

> **type**: `Subcommand`

#### Overrides

`APIApplicationCommandOptionBase.type`

#### Source

[src/types/core-modules.ts:220](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/types/core-modules.ts#L220)