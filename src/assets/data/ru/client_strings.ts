import type { TranslationDict } from '../en/client_strings'

const dict: TranslationDict = {
  'Normal': 'Обычный',
  'Magic': 'Волшебный',
  'Rare': 'Редкий',
  'Unique': 'Уникальный',
  'Gem': 'Камень',
  'Currency': 'Валюта',
  'Divination Card': 'Гадальная карта',
  'Map Tier: ': 'Уровень карты: ',
  'Rarity: ': 'Редкость: ',
  'Item Class: ': 'Класс предмета: ',
  'Item Level: ': 'Уровень предмета: ',
  'Talisman Tier: ': 'Уровень талисмана: ',
  'Level: ': 'Уровень: ',
  'Stack Size: ': 'Размер стопки: ',
  'Sockets: ': 'Гнезда: ',
  'Quality: ': 'Качество: ',
  'Physical Damage: ': 'Физический урон: ',
  'Elemental Damage: ': 'Урон от стихий: ',
  'Critical Strike Chance: ': 'Шанс критического удара: ',
  'Attacks per Second: ': 'Атак в секунду: ',
  'Armour: ': 'Броня: ',
  'Evasion Rating: ': 'Уклонение: ',
  'Energy Shield: ': 'Энерг. щит: ',
  'Chance to Block: ': 'Шанс заблокировать удар: ',
  'Corrupted': 'Осквернено',
  'Unidentified': 'Неопознано',
  '/^Superior (.*)$/': /^(.*) высокого качества$/,
  '/^Blighted (.*)$/': /^Заражённая (.*)$/,
  'Shaper Item': 'Предмет Создателя',
  'Elder Item': 'Древний предмет',
  'Crusader Item': 'Предмет Крестоносца',
  'Hunter Item': 'Предмет Охотника',
  'Redeemer Item': 'Предмет Избавительницы',
  'Warlord Item': 'Предмет Вождя',
  'Synthesised Item': 'Синтезированный предмет',
  '/^Synthesised (.*)$/': /^(?:Синтезированный|Синтезированная|Синтезированное|Синтезированные) (.*?)\u00a0*$/,
  '/^Vaal .*$/': /^.* ваал$/,
  'VEILED_PREFIX': 'Завуалированный префикс',
  'VEILED_SUFFIX': 'Завуалированный суффикс',
  '/^Currently has \\d+ Charges$/': /^Содержит зарядов: \d+$/,
  '/^Spawns a Level (\\d+) Monster when Harvested$/': /^При сборе появляется монстр (\d+) уровня$/,
  'Right-click this item then left-click the ground to plant it in the Sacred Grove.': 'Щелкните ПКМ, затем ЛКМ по земле в Священной роще, чтобы посадить растение.',
  "Combine this with four other different samples in Tane's Laboratory.": 'Объедините эту часть с четырьмя другими в Лаборатории Танэ.',
  'Right-click to add this to your bestiary.': 'Нажмите ПКМ, чтобы добавить это в ваш Бестиарий.',
  'Right-click to add this prophecy to your character.': 'Нажмите ПКМ, чтобы добавить это пророчество вашему персонажу.',
  '/^.* Brain$/': /^Мозг: .*$/,
  '/^.* Eye$/': /^Глаз: .*$/,
  '/^.* Lung$/': /^Лёгкое: .*$/,
  '/^.* Heart$/': /^Сердце: .*$/,
  '/^.* Liver$/': /^Печень: .*$/,
  'You will find Alva and complete her mission.': 'Ты встретишь Альву и выполнишь её задание.',
  'You will find Einhar and complete his mission.': 'Ты встретишь Эйнара и выполнишь его задание.',
  'You will find Niko and complete his mission.': 'Ты встретишь Нико и выполнишь его задание.',
  'You will find Jun and complete her mission.': 'Ты встретишь Джун и выполнишь её задание.',
  'You will find Zana and complete her mission.': 'Ты встретишь Зану и выполнишь её задание.',
  'Blighted {0}': 'Заражённая {0}',
  'You cannot use this item. Its stats will be ignored': 'Вы не можете использовать этот предмет, его параметры не будут учтены',
  '/^Anomalous (.*)$/': /^Аномальный: (.*)$/,
  '/^Divergent (.*)$/': /^Искривлённый: (.*)$/,
  '/^Phantasmal (.*)$/': /^Фантомный: (.*)$/,
  '/^Requires (.+) \\(Level (\\d+)\\)$/': /^Требуется (?<job>.+) \((?<level>\d+) уровень\)$/,
  'Area Level: ': 'Уровень области: ',
  'Lockpicking': 'взлом',
  'Counter-Thaumaturgy': 'контрмагия',
  'Perception': 'восприятие',
  'Deception': 'маскировка',
  'Agility': 'проворство',
  'Engineering': 'инженерное дело',
  'Trap Disarmament': 'разминирование',
  'Demolition': 'взрывное дело',
  'Brute Force': 'грубая сила',
  'Mirrored': 'Отражено',
  'MODIFIER_LINE': /^(?<type>[^"]+)(?:\s+"(?<name>[^"]+)")?(?:\s+\(Уровень: (?<tier>\d+)\))?(?:\s+\(Ранг: (?<rank>\d+)\))?$/,
  'PREFIX_MODIFIER': 'Префикс',
  'SUFFIX_MODIFIER': 'Суффикс',
  'CRAFTED_PREFIX': 'Мастерский префикс',
  'CRAFTED_SUFFIX': 'Мастерский суффикс',
  'UNSCALABLE_VALUE': ' — Неизменяемое значение'
}

export default dict
