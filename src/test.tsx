import * as React from 'react';
import useAutocomplete, {
  AutocompleteGetTagProps,
} from '@mui/material/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';

const Root = styled('div')(({ theme }) => ({
  color: 'rgba(0,0,0,0.85)',
  fontSize: '14px',
  ...theme.applyStyles('dark', {
    color: 'rgba(255,255,255,0.65)',
  }),
}));

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(({ theme }) => ({
  width: '300px',
  border: '1px solid #d9d9d9',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '1px',
  display: 'flex',
  flexWrap: 'wrap',
  ...theme.applyStyles('dark', {
    borderColor: '#434343',
    backgroundColor: '#141414',
  }),
  '&:hover': {
    borderColor: '#40a9ff',
    ...theme.applyStyles('dark', {
      borderColor: '#177ddc',
    }),
  },
  '&.focused': {
    borderColor: '#40a9ff',
    boxShadow: '0 0 0 2px rgb(24 144 255 / 0.2)',
    ...theme.applyStyles('dark', {
      borderColor: '#177ddc',
    }),
  },
  '& input': {
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,.85)',
    height: '30px',
    boxSizing: 'border-box',
    padding: '4px 6px',
    width: '0',
    minWidth: '30px',
    flexGrow: 1,
    border: 0,
    margin: 0,
    outline: 0,
    ...theme.applyStyles('dark', {
      color: 'rgba(255,255,255,0.65)',
      backgroundColor: '#141414',
    }),
  },
}));

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '24px',
  margin: '2px',
  lineHeight: '22px',
  backgroundColor: '#fafafa',
  border: `1px solid #e8e8e8`,
  borderRadius: '2px',
  boxSizing: 'content-box',
  padding: '0 4px 0 10px',
  outline: 0,
  overflow: 'hidden',
  ...theme.applyStyles('dark', {
    backgroundColor:'transparent',
    borderColor: '#303030',
  }),
  '&:focus': {
    borderColor: '#40a9ff',
    backgroundColor: 'transparent',
    ...theme.applyStyles('dark', {
      backgroundColor: 'transparent',
      borderColor: '#177ddc',
    }),
  },
  '& span': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  '& svg': {
    fontSize: '12px',
    cursor: 'pointer',
    padding: '4px',
  },
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: '300px',
  margin: '2px 0 0',
  padding: 0,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: '#fff',
  overflow: 'auto',
  maxHeight: '250px',
  borderRadius: '4px',
  boxShadow: '0 2px 8px rgb(0 0 0 / 0.15)',
  zIndex: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#141414',
  }),
  '& li': {
    padding: '5px 12px',
    display: 'flex',
    '& span': {
      flexGrow: 1,
    },
    '& svg': {
      color: 'transparent',
    },
  },
  "& li[aria-selected='true']": {
    backgroundColor: '#fafafa',
    fontWeight: 600,
    ...theme.applyStyles('dark', {
      backgroundColor: '#2b2b2b',
    }),
    '& svg': {
      color: '#1890ff',
    },
  },
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: '#e6f7ff',
    cursor: 'pointer',
    ...theme.applyStyles('dark', {
      backgroundColor: '#003b57',
    }),
    '& svg': {
      color: 'currentColor',
    },
  },
}));

export default function CountryAutocomplete({ onChange }: CountryAutocompleteProps) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'country-autocomplete',
    defaultValue: [],
    multiple: true,
    options: listCountry,
    getOptionLabel: (option) => option.title,
    onChange: (_event, newValue) => {
      if (onChange) onChange(newValue);
    },
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Select Country</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option: { title: string }, index: number) => {
            const { key, ...tagProps } = getTagProps({ index });
            return <StyledTag key={key} {...tagProps} label={option.title} />;
          })}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const { key, ...optionProps } = getOptionProps({ option, index });
            return (
              <li key={key} {...optionProps}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" />
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </Root>
  );
}
interface FilmOptionType {
  title: string;
}

interface CountryAutocompleteProps {
  onChange?: (selected: FilmOptionType[]) => void;
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// export const listCountry: { title: string }[] = [
export const listCountry: FilmOptionType[] = [
    { title: 'Albania' },
    { title: 'Algeria' },
    { title: 'Andorra' },
    { title: 'Angola' },
    { title: 'Antigua and Barbuda' },
    { title: 'Argentina' },
    { title: 'Armenia' },
    { title: 'Australia' },
    { title: 'Austria' },
    { title: 'Azerbaijan' },
    { title: 'Bahamas' },
    { title: 'Bahrain' },
    { title: 'Bangladesh' },
    { title: 'Barbados' },
    { title: 'Belarus' },
    { title: 'Belgium' },
    { title: 'Belize' },
    { title: 'Benin' },
    { title: 'Bhutan' },
    { title: 'Bolivia' },
    { title: 'Bosnia and Herzegovina' },
    { title: 'Botswana' },
    { title: 'Brazil' },
    { title: 'Brunei' },
    { title: 'Bulgaria' },
    { title: 'Burkina Faso' },
    { title: 'Burundi' },
    { title: 'Cabo Verde' },
    { title: 'Cambodia' },
    { title: 'Cameroon' },
    { title: 'Canada' },
    { title: 'Central African Republic' },
    { title: 'Chad' },
    { title: 'Chile' },
    { title: 'China' },
    { title: 'Colombia' },
    { title: 'Comoros' },
    { title: 'Congo (Congo-Brazzaville)' },
    { title: 'Costa Rica' },
    { title: 'Croatia' },
    { title: 'Cuba' },
    { title: 'Cyprus' },
    { title: 'Czechia (Czech Republic)' },
    { title: 'Democratic Republic of the Congo' },
    { title: 'Denmark' },
    { title: 'Djibouti' },
    { title: 'Dominica' },
    { title: 'Dominican Republic' },
    { title: 'Ecuador' },
    { title: 'Egypt' },
    { title: 'El Salvador' },
    { title: 'Equatorial Guinea' },
    { title: 'Eritrea' },
    { title: 'Estonia' },
    { title: 'Eswatini (fmr. "Swaziland")' },
    { title: 'Ethiopia' },
    { title: 'Fiji' },
    { title: 'Finland' },
    { title: 'France' },
    { title: 'Gabon' },
    { title: 'Gambia' },
    { title: 'Georgia' },
    { title: 'Germany' },
    { title: 'Ghana' },
    { title: 'Greece' },
    { title: 'Grenada' },
    { title: 'Guatemala' },
    { title: 'Guinea' },
    { title: 'Guinea-Bissau' },
    { title: 'Guyana' },
    { title: 'Haiti' },
    { title: 'Holy See' },
    { title: 'Honduras' },
    { title: 'Hungary' },
    { title: 'Iceland' },
    { title: 'India' },
    { title: 'Indonesia' },
    { title: 'Iran' },
    { title: 'Iraq' },
    { title: 'Ireland' },
    { title: 'Israel' },
    { title: 'Italy' },
    { title: 'Jamaica' },
    { title: 'Japan' },
    { title: 'Jordan' },
    { title: 'Kazakhstan' },
    { title: 'Kenya' },
    { title: 'Kiribati' },
    { title: 'Kuwait' },
    { title: 'Kyrgyzstan' },
    { title: 'Laos' },
    { title: 'Latvia' },
    { title: 'Lebanon' },
    { title: 'Lesotho' },
    { title: 'Liberia' },
    { title: 'Libya' },
    { title: 'Liechtenstein' },
    { title: 'Lithuania' },
    { title: 'Luxembourg' },
    { title: 'Madagascar' },
    { title: 'Malawi' },
    { title: 'Malaysia' },
    { title: 'Maldives' },
    { title: 'Mali' },
    { title: 'Malta' },
    { title: 'Marshall Islands' },
    { title: 'Mauritania' },
    { title: 'Mauritius' },
    { title: 'Mexico' },
    { title: 'Micronesia' },
    { title: 'Moldova' },
    { title: 'Monaco' },
    { title: 'Mongolia' },
    { title: 'Montenegro' },
    { title: 'Morocco' },
    { title: 'Mozambique' },
    { title: 'Myanmar (formerly Burma)' },
    { title: 'Namibia' },
    { title: 'Nauru' },
    { title: 'Nepal' },
    { title: 'Netherlands' },
    { title: 'New Zealand' },
    { title: 'Nicaragua' },
    { title: 'Niger' },
    { title: 'Nigeria' },
    { title: 'North Korea' },
    { title: 'North Macedonia' },
    { title: 'Norway' },
    { title: 'Oman' },
    { title: 'Pakistan' },
    { title: 'Palau' },
    { title: 'Palestine State' },
    { title: 'Panama' },
    { title: 'Papua New Guinea' },
    { title: 'Paraguay' },
    { title: 'Peru' },
    { title: 'Philippines' },
    { title: 'Poland' },
    { title: 'Portugal' },
    { title: 'Qatar' },
    { title: 'Romania' },
    { title: 'Russia' },
    { title: 'Rwanda' },
    { title: 'Saint Kitts and Nevis' },
    { title: 'Saint Lucia' },
    { title: 'Saint Vincent and the Grenadines' },
    { title: 'Samoa' },
    { title: 'San Marino' },
    { title: 'Sao Tome and Principe' },
    { title: 'Saudi Arabia' },
    { title: 'Senegal' },
    { title: 'Serbia' },
    { title: 'Seychelles' },
    { title: 'Sierra Leone' },
    { title: 'Singapore' },
    { title: 'Slovakia' },
    { title: 'Slovenia' },
    { title: 'Solomon Islands' },
    { title: 'Somalia' },
    { title: 'South Africa' },
    { title: 'South Korea' },
    { title: 'South Sudan' },
    { title: 'Spain' },
    { title: 'Sri Lanka' },
    { title: 'Sudan' },
    { title: 'Suriname' },
    { title: 'Sweden' },
    { title: 'Switzerland' },
    { title: 'Syria' },
    { title: 'Tajikistan' },
    { title: 'Tanzania' },
    { title: 'Thailand' },
    { title: 'Timor-Leste' },
    { title: 'Togo' },
    { title: 'Tonga' },
    { title: 'Trinidad and Tobago' },
    { title: 'Tunisia' },
    { title: 'Turkey' },
    { title: 'Turkmenistan' },
    { title: 'Tuvalu' },
    { title: 'Uganda' },
    { title: 'Ukraine' },
    { title: 'United Arab Emirates' },
    { title: 'United Kingdom' },
    { title: 'United States of America' },
    { title: 'Uruguay' },
    { title: 'Uzbekistan' },
    { title: 'Vanuatu' },
    { title: 'Venezuela' },
    { title: 'Vietnam' },
    { title: 'Yemen' },
    { title: 'Zambia' },
    { title: 'Zimbabwe' },
];
