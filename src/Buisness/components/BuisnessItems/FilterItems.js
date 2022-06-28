import React from 'react';
import '../../../bootstrap/css/bootstrap.css'
import '../../style/App.css';
import { useSelector } from 'react-redux';
import { useBetween } from 'use-between';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


function FilterItems(props) {
    // HOOKS
    const st = useSelector((state) => state.dataB);
    const { setSelectedCategory, selectedFilterDropdown1, setSelectedFilterDropdown1,
        selectedFilterDropdown2, setSelectedFilterDropdown2 } = useBetween(st.useSharingFilters)

    // Constants And Variables
    const filters = (st.buisnessProfile.WorkType === 'مطعم' ? (st.filters) : (st.filtersClothes));
    let length = filters.length;


    // Skeleton wait load
    setTimeout(() => {
        var skeletonTodoLoad = document.getElementsByClassName('skeleton-filter-by-load');
        for(let i = 0 ;i < 8 ;i++) {
            skeletonTodoLoad[i].style.display = 'none'
        }

        var listItemsLoad = document.getElementsByClassName('list-filter-by-load');
        for(let i = 0 ;i < listItemsLoad.length ;i++) {
            listItemsLoad[i].style.display = 'inline'
        }
    }, 5000)


    // Functions
    // Hover over filter items above dropdowns 
    const mouseOverFilter = (id) => {
        var filterHover = document.getElementById(id);
        filterHover.style.borderWidth = '2px';
    }
    const mouseLeaveFilter = (id) => {
        var filterHover = document.getElementById(id);
        filterHover.style.borderWidth = '1px';
    }

    // Choose type of filtering (vegeterian or not)
    const switchType = (event) => {
        if (selectedFilterDropdown1.type === undefined) {
            selectedFilterDropdown1.type = [];
        }
        else if (selectedFilterDropdown1.type.includes(event.target.value)) {
            let y;
            let min1 = selectedFilterDropdown1.minPrice;
            let max1 = selectedFilterDropdown1.maxPrice;
            y = selectedFilterDropdown1.type.filter(function (value) {
                return (value !== event.target.value);
            });
            setSelectedFilterDropdown1({
                type: y,
                minPrice: min1,
                maxPrice: max1
            })

        }
        else {
            let x = selectedFilterDropdown1.type;
            let min1 = selectedFilterDropdown1.minPrice;
            let max1 = selectedFilterDropdown1.maxPrice;
            x.push(event.target.value)
            setSelectedFilterDropdown1({
                type: x,
                minPrice: min1,
                maxPrice: max1
            });
        }

    }


    // Filter By Price 
    const changePrice = (minORmax, id) => {
        var selectedPrice = document.getElementById(id).value;
        if (minORmax === 'min')
            setSelectedFilterDropdown1({
                type: selectedFilterDropdown1.type,
                minPrice: selectedPrice,
                maxPrice: selectedFilterDropdown1.maxPrice
            });
        else
            setSelectedFilterDropdown1({
                type: selectedFilterDropdown1.type,
                minPrice: selectedFilterDropdown1.minPrice,
                maxPrice: selectedPrice
            });

    }

    const selectDropdown2 = (event) => {
        setSelectedFilterDropdown2(event)
    }

    const switchCategory = (categId, categName) => {
        setSelectedCategory(categName);
    }

    /* click one of the filters above dropdowns ( categories ) */
    const filterClick = (id, name) => {
        switchCategory(id, name);
        for (let i = 1; i <= length; i++) {
            var idRemove = 'filter-by-id' + i;
            var filterRemove = document.getElementById(idRemove);
            filterRemove.style.backgroundColor = "#d6d3d3";
            filterRemove.style.borderWidth = "1px";
            filterRemove.style.fontWeight = "normal";
        }
        var filter = document.getElementById(id);
        filter.style.backgroundColor = "#47A851";
        filter.style.borderWidth = "2px";
        filter.style.fontWeight = "bold";
    }

    /* LIST OF FILTERS above dropdowns */
    const Listfilters = length ? (
        filters.map(filter => {
            return (
                <span className='filter-by list-filter-by-load' id={filter.filterId}
                    onMouseMove={() => mouseOverFilter(filter.filterId)}
                    onMouseLeave={() => mouseLeaveFilter(filter.filterId)}
                    onClick={() => filterClick(filter.filterId, filter.filterType)}
                    style={filter.filterType === 'الكل' ? { backgroundColor: "#47A851", borderWidth: "2px", fontWeight: "bold" } : {}}
                    key={filter.filterId}>
                    {filter.filterType + ' '}
                </span>
            )
        })
    ) : (
        <div className='no-filters'>

        </div>
    )
    const tempSkeletonFilterKeys = ['skeletonFilter1', 'skeletonFilter2', 'skeletonFilter3', 'skeletonFilter4',
        'skeletonFilter5', 'skeletonFilter6', 'skeletonFilter7', 'skeletonFilter8'];
    var skeletonItems = tempSkeletonFilterKeys.map(skeleton => {
        return (
            <span className='filter-by skeleton skeleton-filter-by skeleton-filter-by-load' key={skeleton} dir='rtl'
                    style={{letterSpacing: '5px', color: '#ddd'}}>
                .....
            </span>
        )
    })


    const clickFilterDropdown1 = (e) => {

        const rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            range = document.querySelector(".slider .progress");
        let priceGap = 1000;

        priceInput.forEach(input => {
            input.addEventListener("input", e => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);

                if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

        rangeInput.forEach(input => {
            input.addEventListener("input", e => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if ((maxVal - minVal) < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[1].value = minVal;
                    priceInput[0].value = maxVal;
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });

    }
    return (
        <div className='filter-items-component'>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>


            <div>
                <div dir='auto' className='filterItems'>
                    <div dir='rtl'>
                        {skeletonItems}
                    </div>
                    <div>
                        {Listfilters}
                    </div>
                    <div className='filter-buttons'>

                        {/* Dropdown 1 */}
                        <DropdownButton
                            align="end"
                            variant="light"
                            title={
                                <span>
                                    <i className="bi bi-filter m-1 drop-icon"></i>
                                    <span className='drop-label'>فلترة</span>
                                </span>
                            }
                            id="dropdown-variant-light dropdown1"
                            className='btn drop-button x'
                            autoClose="outside"
                            // drop = 'start'
                            onClick={clickFilterDropdown1}
                            as="div"
                        >
                            <Dropdown.Header className="dropdown-header dropdown-header-me-1">حسب السّعر:</Dropdown.Header>
                            <Dropdown.Item as="div" className="dropdown-item dropdown-item-me-1" eventKey="option-1">

                                <div className="wrapper-range">

                                    <div className="price-input">
                                        <div className="field field1">
                                            {/* <span>إلى:</span> */}
                                            <input type="number" className="input-min" defaultValue="35000" />
                                            <span>ل.س</span>
                                        </div>
                                        <div className="separator">
                                            <i className="bi bi-arrow-right"></i>
                                        </div>
                                        <div className="field field2">
                                            {/* <span>من:</span> */}
                                            <input type="number" className="input-max" defaultValue="5000" />
                                            <span>ل.س</span>
                                        </div>
                                    </div>
                                    <div className="slider">
                                        {/* progress */}
                                        <div className=""></div>
                                    </div>
                                    <div className="range-input" dir='auto'>
                                        <input type="range" className="range-min" id="range-min" min="0" max="100000"
                                            defaultValue="5000" step="100"
                                            onMouseUp={() => changePrice('min', 'range-min')} />
                                        <input type="range" className="range-max" id="range-max" min="0" max="100000"
                                            defaultValue="35000" step="100"
                                            onMouseUp={() => changePrice('max', 'range-max')} />
                                    </div>
                                </div>
                            </Dropdown.Item>

                            <Dropdown.Header className="dropdown-header dropdown-header-me-1">حسب التّصنيف:</Dropdown.Header>
                            <Dropdown.Item as="div" className="dropdown-item dropdown-item-me-1" eventKey="option-1">
                                {
                                    st.buisnessProfile.WorkType === 'مطعم' ? (
                                        <div className='row row-cols-1 row-cols-md-2 veg-buttons-div'>
                                            {
                                                st.restaurantTypes.map(type => {
                                                    return (
                                                        <div key={type.typeId} className='col'>
                                                            <input className="form-check-input form-check-input-filter" type="checkbox" name="checkbox-type-filter"
                                                                id={"typeCheckbox" + type.typeId} value={type.typeName}
                                                                onChange={(event) => switchType(event)}
                                                            />
                                                            <label className="form-check-label" htmlFor={"typeCheckbox" + type.typeId}>{type.typeName}</label>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ) :
                                        (
                                            <div className='row row-cols-1 row-cols-md-3 types-buttons-div'>
                                                {
                                                    st.clothesTypes.map(type => {
                                                        return (
                                                            <div key={type.typeId} className='col'>
                                                                <input className="form-check-input form-check-input-filter" type="checkbox" name="checkbox-type-filter"
                                                                    id={"typeCheckbox" + type.typeId} value={type.typeName}
                                                                    onChange={(event) => switchType(event)}
                                                                />
                                                                <label className="form-check-label" htmlFor={"typeCheckbox" + type.typeId}>{type.typeName}</label>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                }

                            </Dropdown.Item>

                        </DropdownButton>

                        <span className='seperate-filter-buttons'>
                            |
                        </span>

                        {/* Dropdown 2 */}
                        <DropdownButton
                            align="end"
                            variant="light"
                            title={
                                <span>
                                    <i className="bi bi-arrow-down-up m-1 drop-icon"></i>
                                    <span className='drop-label'>
                                        {(selectedFilterDropdown2 === 'recently') ? 'الأحدث'
                                            : (selectedFilterDropdown2 === 'most-likes') ? 'الأكثر إعجاباً'
                                                : (selectedFilterDropdown2 === 'low-to-high') ? 'السعر: من الأرخص إلى الأغلى'
                                                    : (selectedFilterDropdown2 === 'high-to-low') ? 'السعر: من الأغلى إلى الأرخص'
                                                        : 'error'
                                        }
                                    </span>
                                </span>
                            }
                            id="dropdown-variant-light"
                            className='btn drop-button'
                            onSelect={selectDropdown2}
                        >
                            <Dropdown.Header className="dropdown-header dropdown-header-me-2">ترتيب حسب</Dropdown.Header>
                            <Dropdown.Item className="dropdown-item dropdown-item-me-2" eventKey="recently">الأحدث</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item dropdown-item-me-2" eventKey="most-likes">الأكثر إعجاباً</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item dropdown-item-me-2" eventKey="low-to-high">السعر: من الأرخص إلى الأغلى</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item dropdown-item-me-2" eventKey="high-to-low">السعر: من الأغلى إلى الأرخص</Dropdown.Item>
                        </DropdownButton>

                    </div>

                    <div className='seperate-line'></div>

                </div>
            </div>
        </div>

    )
}
export default FilterItems;

