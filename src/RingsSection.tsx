import { useState } from "react";

const ringsData = [
  {
    name: "Round",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/4b73/6480/101f346aca2e5b9b769dbb3d162eca82?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKmvPOkA1opSjiAAUm92XyLJzR92VyannmlCHPTapJxq~PJf2lLTYA5LokOIN4ELIaRAuoHyd48vTYr25PQ2E4AOIjK1Qcb8~iz9R5tVfNwAvabK1Nh8b6-BqO4mDtpu6ynvo-3X3Lb27shKy7CC9-XcsPlTL0kivHw7PDhEJy2nUWGDlzJVE4YRZ1LB4efdi~fytr9xWNPv7ghWkzhn7spYVcUiO5Mr24UbRMiVV~sHlSrlB1bfx1eOuxe1pbPO8GBONCZGvRZpFKZRHHxzMBvMk9~gfn2adrjU0mlcxDZ6zcLSFacYXiz2BRFiGRleTp5AUK8Tti-p6o1YJwlXvA__",
  },
  {
    name: "Oval",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/31fd/0a18/59843e02dd3a2be9723cfc15aded865c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ND3siGdXgQQVPKTkDT5I0hb-I0ZUDAh24gI8byCaIJgozmbuQzpLVmHXb~bTDpWE9voccigkieMQ4GBB12o0TzSim-WbPnS8GGFyk6eo7YPRndI~C0~nvQiXRIzgyXbxb6VKp9qvcGbeRxRp2KRWAjKjoxF500W5jZEvHgzW1B4tgiPpUkFPCOITEK~KKLUPM13ZMNTNPMFUmLVREPMI8y0NaN8Tp746bXQD0ZHLI9m-DyQaklOWhDFuIRpt5dFXSgLGUGl549-lJn-gcXGiwTzBy8KJaeqIvPjLdvFjUCWiWrB0EEQHEzBR5WuMYNmG0hh38962Oy-WqS4rFrTXqQ__",
  },
  {
    name: "Marquise",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/52f0/5c83/e05a81632ce24bb748105f843ba78e33?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e044F7VMaKrSQAqFv5Imv7D8kgI6HyTCiGx0zdSIkbG4eiXN2F4NCUItrjdqyczrchFw0FPB6mwfhAMDNAJnZ54EHG3vuEVxZzuWCDzGKejS0jLdFxcgZK1JLDO5xt5A4com4Opm1-FH1Jql9CHR7kW9sft60QSmorg3VW9VgZRNQN2QQUz2tsKDLfL42BxhXJnAD358~IQ0kiXnR~-BglskDkYyxgYGV-55m8CdwueubxABNDkxMq~BXIIiSGZfu3w6MtAbvjMAcbnq~E8r-535Pc3qkBQjU3-cFGDDlPRDBG3eo7hYB~atiLHTo~Apb6-uS2vSzNZoZ5uTUKDDDw__",
  },
  {
    name: "Emerald",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/7e8a/7cd3/2fe3d8db1c68e91c226bd4f9e1abf135?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PZKdI2-MshSwVOQop-sMkmCVHkDKgJ7CshIFgjgHCDcPjz9vFdsavxmLR0iTeo99BCa3voaWiDCMmMigYIjTujw2P0CcV5TG7lpi-MlzmW90r0q-Np~v-1KaodvKLxnkUYpXct-2o5kXxO3nPKBthYMXeAquA5zVsTQ1oO-A-hkTabzbx3BzslW9twn1Y3TR7mInM7tFvtgIFoImEgv-oiI0FCa6QcjuirV1Ccq9toK4BfPJ9S~ZNtfnVWyvcX7OY0Is4UHOrpPv31ihRDbkf9liWall-cBCLyrh6kLWtnMRECBoYjz0moNf70HVDlzPXsvcDRe0Y3UzaVFHx3ibiw__",
  },
  {
    name: "Pear",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/8b37/01e5/abbd67958a614b8f58916615d7e9e96d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQZOhCl4GgRTNNhd-MX~SukV0AQNebqBjpdhHI~aOYSSEVkHc86JEO4mu7qnwOyI0Klq~IRhwJkgSRvujh-7VPoD05jb45x0rwhLo4v2CF-uIsBODmBNs-ZjNsKWGV14Qdsueaczuy2MNv1X7IlZ4C9GX5I4MaNFKPetwbKnPTzFo0Esu4n1fZSXjIJkmErME1myGW7BTtn0NeRXbFHx2XB~uTR~-qHrpZuySo4M21jsfu2q9xTU4zU~bRX56w40u2ECWK~5SBC7w56o4hatatUQbfS0-Dm6CpNmUKKWNUswlpwATla7PuHFhg1VKDlbeHVxrWhQvu0W-5-a1PhiNg__",
  },
  {
    name: "Cushion",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/0124/2d2c/0d2366bb4dc475600f77472520c03069?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C8DsBoB18DLrNYWi5Q9TPIhgajxNfjMb6-sRvzVxh7YXsF7IX2kKe~XHrZEfM8pmc5LjPH7dYwpWmhbCMuzZTmkTpEe44xbelzjC98nnY2CkSSnj83mCsKjvEhT9yMPj5ft-WInKmCnT58tkEh73tfGWA~vK-GWF8vmMvkDHcB3s50t0je1vSf8yBKvYqSDk9517axr2fNvchsZHfjYaA7D9Um3i68a3uxDZPGZunQfA5l94ukG-VQzZki0-YdpmnFUBsjnra64jxNF~chLGspl2BCpOEi8HbahBpNWR40NPQPBq302V8b53fKH522QrZGYPMmt4SBoUJHlpS-nGGA__",
  },
  {
    name: "Radiant",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/f35c/2513/fd0cd81eac0eb3f4674e0692c58785a0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BKHl5FGmnCawmtIxDiFqhxr5Mc1lmORKbaXY91AaicgSQFSsTtUuDdaSz-RDShx89TAhatJ445eJMjtWf7rj~gjPI1q1~AxVQQGzdfanBWPrT0WV~4Eih8RCdvEqMc2PxdHso6BZa9c0Cc3T~Z6mQ58lRQBVzma18qqPGZgFK5AhnjwxOwc5ia2r~xcQtaWgkyf5Bo5e6KPvjnpKQyejh5RTrS3o-tiOeW0m~dn4wOnwUy7lwKANm79iBxRBuC95VBqYqeb-eP-mBA8~0kqae4smIXAu4dSWrpTjYB7QXu1-MUijcrgda4qtta8Lk1V8RcG8tEpCKujrvT9v6xtc~w__",
  },
  {
    name: "Princess",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/9e71/66ad/fe46750c7f31e5deb8998c969cb12f70?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF0a39cDAjliHd7vFpCtq9OB8f12C5R~L~KXKwYwX4QmGfXd9DHFeEfM-f-mFroWAeT7an2CVK6F3yy7MzKXm4-AnvbRAtPPm6dRbSuNkqJ2IeKDt0A7uwWCao5fGbGuVbDY870hzb0cbka-EgyhRhHnYj77K18CxaBNibJSn4iuNxMLEJ-HO8WkYhdEIA9~zAbJrobiG3CDWgk2yuaC1nCCJhLokwbZGWq3D7mLGAxGZl~F3ZsjFfDGLganwTSYi90TSyLeagCiRxAv9grgKxa0jLn23SIDaJBbyGy0wv87xR25r5DVjwPwOtBdi6OI14s9zM~JLX36QVNqowwZhg__",
  },
];

const RingsSection = () => {
  const [SelectedRing, setSelectedRing] = useState("Round");
  return (
    <section className="rings-section">
      <h2 className="rings-title">Rings</h2>
      <div className="rings-divider">
        <span className="divider-line"></span>
        <span className="divider-icon">⟡</span>
        <span className="divider-line"></span>
      </div>
      <div className="rings-grid">
        {ringsData.map((ring, index) => (
          <div
            key={index}
            className="ring-item"
            onClick={() => {
              setSelectedRing(ring.name);
            }}
          >
            <img src={ring.imgSrc} alt={ring.name} className="ring-image" />
            <p
              className={`ring-name ${
                ring.name === SelectedRing ? "highlighted" : ""
              }`}
            >
              {ring.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RingsSection;
